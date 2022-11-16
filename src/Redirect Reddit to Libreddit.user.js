// ==UserScript==
// @name         Redirect Reddit to Libreddit
// @version      2
// @encoding     utf-8
// @match        *://*.reddit.com/*
// @match        *://libreddit.nl/*
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

if (window.location.hostname === "www.reddit.com") {
  const pathname = window.location.pathname;
  if (pathname) {
    window.location.replace("https://libreddit.nl" + pathname);
  }
  return;
}

if (window.location.hostname === "libreddit.nl") {
  document.cookie = "front_page=default; Secure";
  document.cookie = "post_sort=hot; Secure";
  document.cookie = "comment_sort=top; Secure";
  document.cookie = "hide_hls_notification=on; Secure";
  document.cookie = "layout=card; Secure";
  document.cookie = "theme=system; Secure";
  document.cookie = "use_hls=on; Secure";
  document.cookie = "wide=off; Secure";
}
