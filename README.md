Clearweb
The web, without the AI.
Clearweb is a free, open-source browser extension that removes AI-generated content and chatbot widgets from every website you visit — automatically, silently, and without collecting any data.
What it removes
Site
What's blocked
Google
AI Overviews / Search Generative Experience
Bing
Copilot sidebar
Stack Overflow
GPT-generated answers
Reddit
AI post summaries
GitHub
Copilot chat UI
LinkedIn
AI writing assistant prompts
YouTube
AI-generated video summaries
Amazon
AI review summaries
Any site
Floating chatbot widgets (Intercom, Drift, Tidio, Zendesk, HubSpot, Crisp, Freshdesk, and more)
Any site
Elements with AI-related class/ID names
Any site
Elements containing "AI-generated", "Powered by AI", etc.
How it works
Clearweb uses four detection strategies, layered for maximum coverage:
Site-specific selectors — exact CSS selectors for AI elements on popular sites
Chatbot widget selectors — a list of known floating chat widget IDs and class names
Pattern matching — hides any element whose class or ID contains ai-, gpt-, copilot-, gemini-, etc.
Keyword scanning — scans element text for phrases like "AI-generated" or "Powered by AI"
Elements are hidden with display: none (not deleted), so toggling the extension off instantly restores the page.
Installing for development
Clone this repo
Open Chrome → chrome://extensions
Enable Developer mode (top right)
Click Load unpacked → select this folder
For Firefox: about:debugging#/runtime/this-firefox → Load Temporary Add-on → select manifest.json
Adding new rules
Open content.js and find the AI_RULES object. To add a new site:
Js
Pull requests with new rules are very welcome.
Privacy
Zero data collection. No analytics. No telemetry. Everything runs locally in your browser.
Support
Clearweb is free and always will be. If you find it useful, you can support the project:
☕ Ko-fi
♡ GitHub Sponsors
Licence
MIT
