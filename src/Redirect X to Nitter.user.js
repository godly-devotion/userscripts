// ==UserScript==
// @name         Redirect X to Nitter
// @version      2
// @encoding     utf-8
// @match        *://x.com
// @match        *://*.x.com/*
// @match        *://nitter.poast.org/*
// @author       godly-devotion
// @compatible   chrome
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @compatible   edge
// @downloadURL  https://github.com/godly-devotion/userscripts/raw/main/src/Redirect%20X%20to%20Nitter.user.js
// @updateURL    https://github.com/godly-devotion/userscripts/raw/main/src/Redirect%20X%20to%20Nitter.user.js
// @run-at       document-start
// ==/UserScript==

function main() {
  if (window.location.hostname === "x.com") {
    const pathname = window.location.pathname;
    if (pathname) {
      window.location.replace("https://nitter.poast.org" + pathname);
    }
    return;
  }

  if (window.location.hostname === "nitter.poast.org") {
    if (document.cookie.split("; ").length > 1) {
      return;
    }
    document.cookie = "hlsPlayback=on; path=/; Secure";
    document.cookie = "infiniteScroll=on; path=/; Secure";
    document.cookie = "replaceReddit=libreddit.freedit.eu; path=/; Secure";
    document.cookie = "replaceTwitter=nitter.poast.org; path=/; Secure";
    document.cookie = "replaceYouTube=; path=/; Secure";
    window.location.reload();
  }
}

main();
