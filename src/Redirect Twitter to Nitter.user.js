// ==UserScript==
// @name         Redirect Twitter to Nitter
// @version      6
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

if (window.location.hostname === "twitter.com") {
  const pathname = window.location.pathname;
  if (pathname) {
    window.location.replace("https://nitter.nl" + pathname);
  }
  return;
}

if (window.location.hostname === "nitter.nl") {
  if (localStorage.getItem("reloadForCookies")) {
    return;
  }
  document.cookie = "hlsPlayback=on; Secure";
  document.cookie = "infiniteScroll=on; Secure";
  document.cookie = "replaceReddit=libreddit.nl; Secure";
  document.cookie = "replaceTwitter=nitter.nl; Secure";
  document.cookie = "replaceYouTube=; Secure";
  localStorage.setItem("reloadForCookies", "true");
  window.location.reload();
}
