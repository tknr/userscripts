// ==UserScript==
// @name         Twitter mobile to PC redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       tknr
// @match        https://mobile.twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==

(function() {
    var oldUrl = location.href;
    console.log(oldUrl);

    var newUrl = 'https://twitter.com' + location.pathname+ location.search + location.hash;
    console.log(newUrl);

    location.href = newUrl;

})();
