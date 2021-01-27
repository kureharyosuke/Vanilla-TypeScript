// Type Assertion (타입 단언)

var a;
a = 20;
a = 'a'
var b = a as string;

// DOM API 조작

// ex) <div id="app">hi</div>
 
var div = document.querySelector('div'); //var div: HTMLDivElement
var div2 = document.querySelector("#app"); //var div2: Element
if (div) {
    div.innerHTML
}
