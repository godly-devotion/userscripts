// ==UserScript==
// @name         Redirect Reddit to Libreddit
// @version      3
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
  if (document.cookie) {
    return;
  }
  document.cookie = "front_page=default; path=/";
  document.cookie = "post_sort=hot; path=/";
  document.cookie = "comment_sort=top; path=/";
  document.cookie = "hide_hls_notification=on; path=/";
  document.cookie = "layout=card; path=/";
  document.cookie = "theme=system; path=/";
  document.cookie = "use_hls=on; path=/";
  document.cookie = "wide=off; path=/";
  window.location.reload();
}
