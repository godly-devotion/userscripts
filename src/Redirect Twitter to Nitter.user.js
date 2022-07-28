// ==UserScript==
// @name         Redirect Twitter to Nitter
// @version      4
// @encoding     utf-8
// @match        *://*.twitter.com/*
// @author       godly-devotion
// @compatible   chrome
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @compatible   edge
// @downloadURL  https://github.com/godly-devotion/userscripts/raw/main/src/Redirect%20Twitter%20to%20Nitter.user.js
// @updateURL    https://github.com/godly-devotion/userscripts/raw/main/src/Redirect%20Twitter%20to%20Nitter.user.js
// @run-at       document-start
// ==/UserScript==

const pathname = window.location.pathname;
if (pathname) {
  window.location.replace("https://nitter.nl" + pathname);
}
