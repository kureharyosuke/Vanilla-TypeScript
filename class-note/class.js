//@ts-check

function Person(name: string, age: number): void {
    this.name = name;
    this.age = age;
}

var capt = new Person('captin', 100);

 class Person {
     constructor(name, age ) {
         console.log('')
         this.name = name;
         this.age = age;

     }
 }

 var seho = new Person('seho', 30);
 console.log(seho);