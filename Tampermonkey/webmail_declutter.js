// ==UserScript==
// @name         Webmail declutter
// @namespace    http://tampermonkey.net/
// @version      2025-05-04
// @description  try to take over the world!
// @author       You
// @match        https://poczta.onet.pl/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=onet.pl
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    $(document).ready(function(){
        setTimeout(manipulateDOM, 500);
    });

    function manipulateDOM()
    {
        for(let i = 2; i <= 5; i++)
        {
            $("#js_MailsContainer").children().eq(i).hide();
        }

        $("li.list-item").each(function(index) {
            var $el = $(this);
            var spans = $el.find("span");
            spans.each(function(i){
                var $sp = $(this);
                console.log($sp.text());
                if($sp.text().includes(" - Onet"))
                {
                    $el.hide();
                }
            });
        });
    }

})();
