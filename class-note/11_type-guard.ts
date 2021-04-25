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
// console.log(tony.skill); // #공동적으로 속성 제공

if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

// 타입 가드 정의 =>  is
function isDevelopoer(target: Developer | Person): target is Developer {
  //target(파라미터)가 is(타입가드)
  return (target as Developer).skill !== undefined;
}

//

if (isDevelopoer(tony)) {
  tony.skill;
} else {
  tony.age;
}
