// ==UserScript==
// @name         <<script name>>
// @namespace    http://tampermonkey.net/
// @version      2025-01-04
// @description  try to take over the world!
// @author       You
// @match        <<url>>
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// COPY BELOW THIS LINE!
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function(){
           setTimeout(manipulateDOM, 500);
    });

    function manipulateDOM() 
    {
        //operations here
    }

})();
