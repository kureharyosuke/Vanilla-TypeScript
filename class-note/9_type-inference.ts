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

