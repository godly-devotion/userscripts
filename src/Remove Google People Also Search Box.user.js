// ==UserScript==
// @name         Remove Google People Also Search Box
// @version      1.0
// @encoding     utf-8
// @match        *://*.google.com/search*
// @author       godly-devotion
// @compatible   chrome
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @compatible   edge
// @downloadURL  https://github.com/godly-devotion/userscripts/raw/main/src/Remove%20Google%20People%20Also%20Search%20Box.user.js
// @updateURL    https://github.com/godly-devotion/userscripts/raw/main/src/Remove%20Google%20People%20Also%20Search%20Box.user.js
// @run-at       document-start
// ==/UserScript==
document.querySelectorAll('div[id^=eob]').forEach(e => {
  const parentElement = e.parentElement;
  e.remove();
  parentElement.style.height = 'auto';
});
