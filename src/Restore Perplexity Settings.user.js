// ==UserScript==
// @name         Restore Perplexity Settings
// @version      1
// @encoding     utf-8
// @match        *://*.perplexity.ai
// @match        *://*.perplexity.ai/*
// @author       godly-devotion
// @compatible   chrome
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @compatible   edge
// @downloadURL  https://github.com/godly-devotion/userscripts/raw/main/src/Restore%20Perplexity%20Settings.user.js
// @updateURL    https://github.com/godly-devotion/userscripts/raw/main/src/Restore%20Perplexity%20Settings.user.js
// @run-at       document-start
// ==/UserScript==

sessionStorage.setItem("appDownloadBannerDismissed", "true");
sessionStorage.setItem("signUpBannerDismissed", "true");
