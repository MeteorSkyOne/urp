// ==UserScript==
// @name         教师评价
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       MeteorSky
// @match        http://jw2.yzu.edu.cn/jxpgXsAction.do
// @match        http://jw3.yzu.edu.cn/jxpgXsAction.do
// @match        http://jw1.yzu.edu.cn/jxpgXsAction.do
// @icon         https://www.google.com/s2/favicons?domain=greasyfork.org
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.js
// ==/UserScript==

function submit(){
    var txt = "教师教课内容广大博深，高质量，高效率。教课内容新颖，独特，有个性。";
    $("input").each(function(e){
        console.log(123);
    });
    $("textarea").val(txt);
        var aa = document.getElementsByTagName("input");
        var b = Array.from(aa);
        b.forEach(function(item){
            if(item.value == '6_0.95' || item.value == '5_0.95') item.click();
        })
        var kk = document.getElementsByTagName("textarea");
        var k = Array.from(kk);
        var cc = document.getElementsByTagName("img");
        var c = Array.from(cc);
        c.forEach(function(item){
            if(item.title == "提交") item.click();
        })
}
function register(){
    GM_registerMenuCommand('评价', function(){
        submit();
    },'a');
}
(function() {
    'use strict';$(document).ready(function () {
    register();
    submit();
    })
})();