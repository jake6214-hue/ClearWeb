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
    siteE