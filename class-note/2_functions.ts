// 함수의 파라미터에 타입을 정의하는 방식

function asdf(a: number, b: number) {
  return a + b;
}

asdf(10, 29); // 파라미터 정의

// 함수의 반환값에 타입을 정의하는 방식

function fdas(): number {
  return 123; // 반환값 넘버
}

// 함수의 타입을 정의하는 방식

function asdffdsa(a: number, b: number): number {
  return a + b;
}

asdffdsa(1, 2);
// Error: asdffdsa(1, 2, 3, 4);
// Expected 2 arguments, but got 4. 개 인자를 받기때문에 4개는 안들어가진다.

// 함수의 옵셔널 파라미터 (선택적 파라미터) :  b?: string 옵션 = 하나도 되고 둘도 된다.
function log(a: string, b?: string) {}

log("hellowwirng");
log("hello ts", "abc");
