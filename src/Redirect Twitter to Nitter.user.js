// ==UserScript==
// @name         Redirect Twitter to Nitter
// @version      11
// @encoding     utf-8
// @match        *://*.twitter.com/*
// @match        *://nitter.freedit.eu/*
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

if (
  window.location.hostname === "twitter.com" ||
  window.location.hostname === "mobile.twitter.com"
) {
  const pathname = window.location.pathname;
  if (pathname) {
    window.location.replace("https://nitter.freedit.eu" + pathname);
  }
  return;
}

if (window.location.hostname === "nitter.freedit.eu") {
  if (document.cookie) {
    return;
  }
  document.cookie = "hlsPlayback=on; path=/";
  document.cookie = "infiniteScroll=on; path=/";
  document.cookie = "replaceReddit=libreddit.freedit.eu; path=/";
  document.cookie = "replaceTwitter=nitter.freedit.eu; path=/";
  document.cookie = "replaceYouTube=; path=/";
  window.location.reload();
}
