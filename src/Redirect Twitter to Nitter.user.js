// ==UserScript==
// @name         Redirect Twitter to Nitter
// @version      8
// @encoding     utf-8
// @match        *://*.twitter.com/*
// @match        *://nitter.nl/*
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
    window.location.replace("https://nitter.nl" + pathname);
  }
  return;
}

if (window.location.hostname === "nitter.nl") {
  if (document.cookie) {
    return;
  }
  document.cookie = "hlsPlayback=on; path=/";
  document.cookie = "infiniteScroll=on; path=/";
  document.cookie = "replaceReddit=libreddit.nl; path=/";
  document.cookie = "replaceTwitter=nitter.nl; path=/";
  document.cookie = "replaceYouTube=; path=/";
  window.location.reload();
}
