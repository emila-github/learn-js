(function(){
    //在当前的script节点前插入一个新的js
    var doc = document,
        s = doc.createElement('script'),
        l = doc.getElementsByTagName('script').length,
        curS = doc.getElementsByTagName('script')[ l - 1];
    s.type = 'text/javascript';
    s.charset = 'utf-8';
    s.src =  '3.js';
    curS.parentNode.insertBefore(s, curS);
})();


var testName = 'js-load2.js';