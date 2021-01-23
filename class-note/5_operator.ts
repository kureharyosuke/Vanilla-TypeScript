// Operator * Union Type

function logMessage(value: string) {
    console.log(value)
}

logMessage('Hello');
// logMessage(100); Error : type is String

// * Union Type
function logMessage2(value: string | number) {
    console.log(value)
}
logMessage2('Union Type')
logMessage2(1004)

// logMessage2(false);
// Error : Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

var seok: string | number | boolean
// string or number or boolean = Union Type 

function logMessage3(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage3('Union Type')
logMessage3(1004)

interface Developers {
    name: string
    skill: string
}

interface Person {
    name: string
    age: number
}

function Union(union: Developers | Person) {
    // // Union Type이 되면, 타입(Developer |or Person)의 공통된 타입만 속성이 된다. 
    // union.name; // (property) name: string
    
    // /** 
    //  * any
    //  * Property 'age' does not exist on type 'Developers | Person'.
    //  * Property 'age' does not exist on type 'Developers'.ts(2339)
    //  */

    // union.age;  
    
    // // @Error : union.age
    // // Why not Error?.... not or.. (property) Person.age: number !==  WHY?
    // /**  
    // * Error찾음!: 4_interface.ts Line#74=> interface Developer extends Person { Person의 interface 상속때문에 인식하게 됨. Person의 확장 | 상속값의 age가 있음.}
    // */
    
    // union.skills; 
    
    // //  Property 'skill' does not exist on type 'Developer | Person'.
    // //  Property 'skill' does not exist on type 'Person'.
}

Union({name: 'DevYUN', skill:'JS Dev'})
Union({name: 'DevRYO', skill: 'Python Dev'})

// # INTERSECTION 인터섹션 

function askUnion(union: Developers & Person) {
     // Union Type이 되면, 타입(Developer &and Person)의 정의된 타입 모두 속성이 된다. 
    union.name  //(property) name: string
    union.age   //(property) Person.age: number
    union.skill //(property) Developer.skill: string
}

// askUnion({name: 'DevYUN', skill:'JS Dev'}) // Error is age...({name: 'DevYUN', skill:'JS Dev', age:123})
// Argument of type '{ name: string; skill: string; }' is not assignable to parameter of type 'Developers & Person'.
// Property 'age' is missing in type '{ name: string; skill: string; }' but required in type 'Person'.t

askUnion({name: 'DevYUN', skill:'JS Dev', age: 123})

var kureha: string | number | boolean   // var kureha: string | number | boolean
var ryosuke: string & number & boolean; // var ryosuke: never

/**
 * 유니온타입 은 타입가드 를 만들어가는 것같은 타입가드!
 * 인터섹션 은 타입의 합집합!
 * 유니온타입과 인터섹션의 타입의 차이는 새로운 하나의 타입이 생성된거다. ({name: 'DevYUN', skill:'JS Dev', age:123})
 */