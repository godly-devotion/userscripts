// ==UserScript==
// @name         Bypass Google Redirect Notice
// @version      4
// @encoding     utf-8
// @match        *://*.google.com/url*
// @author       godly-devotion
// @compatible   chrome
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @compatible   edge
// @downloadURL  https://github.com/godly-devotion/userscripts/raw/main/src/Bypass%20Google%20Redirect%20Notice.user.js
// @updateURL    https://github.com/godly-devotion/userscripts/raw/main/src/Bypass%20Google%20Redirect%20Notice.user.js
// @run-at       document-start
// ==/UserScript==

const url = new URL(window.location).searchParams.get("url");
if (url) {
  window.location.replace(decodeURIComponent(url).replace("%20", "+"));
}
