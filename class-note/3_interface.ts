
// interface

interface User {
    age: number;
    name: string;

}

// 변수에 활용한 변수
var yunseok: User = {
    age: 33,
    name: 'yunseok'
}

// 함수에 인터페이스 활용
function getUser(user: User){
    // user: User 에 파라미터를 적용!
    console.log(user)
}

const capt = {
    name: 'captin',
    age: 123
}
getUser(capt);

// # 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
 (a:number, b:number): number;
}

var sum: SumFunction 
sum = function (a:number, b:number):number {
    return a + b;
}


// # 인덱싱 
interface StringArray {
    [index: number]: string
}

var arr: StringArray = ['a', 'b', 'c']
arr[0]; // 'a'

// # 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

var obj: StringRegexDictionary = {

    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
    // [key: string] = cssFile , RegExp = /\.js$/
}

// obj['cssFile'] = 'a' : not RegExp
// obj.sth

Object.keys(obj).forEach(function(value) {

})

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    // name: string; => extends Person
    // age: number; => extends Person
    language: string;
}

var captin: Developer = {
    language: 'TS',
    name: "Captin",
    age: 32,
}