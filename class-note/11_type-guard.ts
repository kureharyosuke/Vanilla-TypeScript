interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  // Developer | Person => 유니온타입
  return { name: "Tony", age: 33, skill: "Iron Making" };
}

var tony = introduce();
// console.log(tony.skill);// 공동적으로 포함된 것만

if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}
