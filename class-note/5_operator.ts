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
    skills: string
}

interface Person {
    name: string
    age: number
}

function Union(union: Developers | Person) {
    // Union Type이 되면, 타입(Developer |or Person)의 공통된 타입만 속성이 된다. 
    union.name; // (property) name: string
    /**
     * any
Property 'age' does not exist on type 'Developers | Person'.
  Property 'age' does not exist on type 'Developers'.ts(2339)
     */

    union.age;  
    // @Error : union.age
    // Why not Error?.... not or.. (property) Person.age: number !==  WHY?
    union.skills; 
    //  Property 'skill' does not exist on type 'Developer | Person'.
    //  Property 'skill' does not exist on type 'Person'.
}

Union()

function askUnion(union: Developer & Person) {
     // Union Type이 되면, 타입(Developer &and Person)의 정의된 타입 모두 속성이 된다. 
    union.name  //(property) name: string
    union.age   //(property) Person.age: number
    union.skill //(property) Developer.skill: string
}

var kureha: string | number | boolean   // var kureha: string | number | boolean
var ryosuke: string & number & boolean; // var ryosuke: never