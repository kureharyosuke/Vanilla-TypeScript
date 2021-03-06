/**
 * 맵드 타입(Mapped Type)이란 ?
 *
 * 맵드 타입이란 기존에 정의되어 있는 타입을 새로운 타입으로 변환해 주는 문법을 의미합니다.
 *
 * 마치 자바스크립트 map() API함수를 타입에 적용한것과 같은 효과를 가집니다.
 */

/**
 * 자바스크립트의 map 함수란 ?
 *
 * 자바스크립트의 map() API는 배열을 다룰 때 유용한 자바스크립트 내장 API입니다.
 */

var arr = [
  { id: 1, title: "함수" },
  { id: 2, title: "변수" },
  { id: 3, title: "인자" },
];

var resultMap = arr.map(function (item) {
  return item.title;
});

console.log(result); // ['함수', '변수', '인자']

/**
 * 위 코드는 3개의 객체를 요소로 가진 배열 arr에 .map() API를 적용한 코드입니다.
 *
 * 배열의 각 요소를 순회하여 객체(id, title)에서 문자열로 반환합니다.
 */

// -------------------------------------------------------------------

/**
 * 맵드 타입의 기본 문법
 *
 * 맵드 타입은 위에서 살펴본 자바스크립트의 map() 함수를 타입에 적용했다고 보시면 됩니다.
 *
 * 이를 위해서는 아래와 같은 형태의 문법을 사용해야 합니다.
 */

// Mapped Type 기본 문법

// { [ P in K ] : T }
// { [ P in K ] ? : T }
// { readonly[ P in K ] : T }
// { readonly[ P in K ] ? : T }

/**
 * 맵드 타입 기본 예제
 */

type Heroes = "Hulk" | "Capt" | "Thor"; // Union Type 유니온 타입
type HeroArgs = { [K in Heroes]: number }; // Mapped Type 맵드 타입 | 타입을 변환

// type HeroArgs = {
//    Hulk: number;
//    Capt: number;
//    Thor: number;
// }

const ages: HeroArgs = {
  Hulk: 33,
  Capt: 100,
  Thor: 10000,
};

// // for in 반복문 코드

// var arr2 = ['a', 'b', 'c']
// for (var key in arr) {
//   console.log(arr[key]);
// }
