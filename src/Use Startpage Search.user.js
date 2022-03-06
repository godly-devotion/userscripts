// ==UserScript==
// @name         Use Startpage Search
// @version      1.0
// @encoding     utf-8
// @description  Redirect DuckDuckGo searches to use Startpage
// @match        *://duckduckgo.com/*
// @author       godly-devotion
// @compatible   safari
// @downloadURL  https://github.com/godly-devotion/userscripts/raw/main/src/Use%20Startpage%20Search.user.js
// @updateURL    https://github.com/godly-devotion/userscripts/raw/main/src/Use%20Startpage%20Search.user.js
// @run-at       document-start
// ==/UserScript==
const query = new URL(window.location).searchParams.get("q");
if (query) {
  window.location.replace("https://www.startpage.com/sp/search?q=" + encodeURIComponent(query).replace("%20","+"));
}
