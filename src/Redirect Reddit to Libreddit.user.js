// ==UserScript==
// @name         Redirect Reddit to Libreddit
// @version      1
// @encoding     utf-8
// @match        *://*.reddit.com/*
// @author       godly-devotion
// @compatible   chrome
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @compatible   edge
// @downloadURL  https://github.com/godly-devotion/userscripts/raw/main/src/Redirect%20Reddit%20to%20Libreddit.user.js
// @updateURL    https://github.com/godly-devotion/userscripts/raw/main/src/Redirect%20Reddit%20to%20Libreddit.user.js
// @run-at       document-start
// ==/UserScript==

const pathname = window.location.pathname;
if (pathname) {
  window.location.replace("https://libreddit.nl" + pathname);
}
