interface Person {
    name: string
    age: number;
}

var yun : Person = {
    name: 'yun',
    age: 30
}

// Person : interface Person

type Person2 = {
    name: string;
    age: number;
}

var yun : Person2 = {
    name: 'yun',
    age: 30
}

/**  import => types(typeName)
 * Person2 : type Person2 = {
    name: string;
    age: number;
} @ 타입은 확장이 불가하다.
 */

type MyString = string;
var str: MyString = 'Hello';

type Todo = { id: string; title: string; done: boolean;}

function getTodo(todo: Todo) {

}

/**
 * type vs interface
타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능 / 불가능 여부입니다. 인터페이스는 확장이 가능한데 반해 타입 별칭은 확장이 불가능합니다. 따라서, 가능한한 type 보다는 interface로 선언해서 사용하는 것을 추천합니다.

TIP

좋은 소프트웨어는 언제나 확장이 용이해야 한다는 원칙에 따라 가급적 확장 가능한 인터페이스로 선언하면 좋습니다 😃
 */