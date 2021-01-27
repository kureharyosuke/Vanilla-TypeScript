// Type Inference

// 타입추론 기본 2

var a; //var a: any
var b = 10 //var b: number
var c = 'abc' //var c: string

function getD(d = 10) { //function getD(d?: number): number
    var f = '10'//(local var) f: string
    return d + f; //1010
}

// 타입추론 기본 2

interface Dropdown<T> {
    value: T //(type parameter) T in Dropdown<T>
    title: string;
}
var shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello'
}

// 타입추론 기본 3

interface Dropdowns<T> {
    value: T //(type parameter) T in Dropdowns<T>
    title: string;
}

interface DetailDropdown<K> extends Dropdowns<K> {
    description: string;
    tag: K;
    // value, //extends Dropdowns<K>
    // title, //extends Dropdowns<K>
}

var detailedItem: DetailDropdown<string> = {
    title: 'abc', //*(property) Dropdowns<string>.title: string
    description: 'ab', //
    value: 'a', //*Dropdowns<string>.value: string
    tag: 'a', //(property) DetailDropdown<string>.tag: string
}

// Best Common Type

var arr = [1, 2, true]; // var arr: (number | boolean)[]
var arr2 = [1,2,3, true, 'a'] //var arr2: (string | number | boolean)[]

// Contextual Typing

window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);   //<- OK
    // console.log(mouseEvent.kangaroo); //<- Error!
  };

window.onscroll = function(uiEvent) {
    console.log(uiEvent.button); //<- Error!
  }

  const handler = function(uiEvent) {
    console.log(uiEvent.button); //<- OK
  }

/**
 * 
 * TIP
 * Duck Typing : 객체의 변수 및 메서드의 집합이 객체의 타입을 결정하는 것을 의미. 
 *               동적 타이핑의 한 종류 
 * Structural Subtyping : 객체의 실제 구조나 정의에 따라 타입을 결정하는 것을 의미
 */