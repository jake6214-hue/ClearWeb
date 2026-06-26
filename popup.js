// CLEARWEB — Popup Script
const toggle = document.getElementById("toggle");
const countEl = document.getElementById("count");
const dot = document.getElementById("dot");
const status = document.getElementById("status");
const siteEl = document.getElementById("site");
const main = document.getElementById("main");

chrome.storage.sync.get(["enabled"], (result) => {
  const enabled = result.enabled !== false;
  toggle.checked = enabled;
  updateUI(enabled);
});

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (!tabs[0]) return;
  try {
    const url = new URL(tabs[0].url);
    siteEl.textContent = url.hostname.replace(/^www\./, "");
  } catch (e) { siteEl.textContent = "—"; }

  chrome.tabs.sendMessage(tabs[0].id, { type: "GET_COUNT" }, (response) => {
    if (chrome.runtime.lastError) return;
    if (response?.count !== undefined) countEl.textContent = response.count;
  });
});

toggle.addEventListener("change", () => {
  const enabled = toggle.checked;
  chrome.storage.sync.set({ enabled });
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs[0]) return;
    chrome.tabs.sendMessage(tabs[0].id, { type: "SET_ENABLED", enabled }, () => {
      setTimeout(() => {
        chrome.tabs.sendMessage(tabs[0].id, { type: "GET_COUNT" }, (r) => {
          if (r?.count !== undefined) countEl.textContent = r.count;
        });
      }, 300);
    });
  });
  updateUI(enabled);
});

function updateUI(enabled) {
  if (enabled) {
    dot.classList.remove("off");
    status.textContent = "Active";
    main.classList.remove("disabled");
  } else {
    dot.classList.add("off");
    status.textContent = "Paused";
    main.classList.add("disabled");
    countEl.textContent = "0";
  }
}