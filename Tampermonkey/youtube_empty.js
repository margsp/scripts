// ==UserScript==
// @name         YT Hide
// @namespace    http://tampermonkey.net/
// @version      2025-01-04
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function(){
           setTimeout(manipulateDOM, 500);
    });

    function manipulateDOM() 
    {
        $(".ytd-page-manager").hide();
        $("a#thumbnail").hide();
    }

})();
