// #Introduction : 소개
/**
 * TypeScript는 공통 타입 변환을 용이하게 하기 위해 몇 가지 유틸리티 타입을 제공합니다.
 * 이런 유틸리티들은 "전역"으로 사용 가능합니다.
 */

// # Table of Contents : 목차
/**
 * - Partial<T>
 * - Readonly<T>
 * - Record<K,T>
 * - Omit<T,K>
 * - Exclude<T, U>
 * - Extract<T, U>
 * - NonNullable<T>
 * - Parameters<T>
 * - ConstructorParameters<T>
 * - ReturnType<T> 
 * - InstanceType<T> 
 * - Required<T> 
 * - ThisParameterType 
 * - OmitThisParameter 
 * - ThisType<T>
 */

// # Partial<T>

/**
 *  [T]의 모든 프로퍼티를 선택적으로 만드는 타입을 구성합니다.
 *  이 유틸리티는 주어진 타입의 모든 하위 타입 집합을 나타내는 타입을 반환합니다.
 */

interface PartialT {
  title: string;
  description: string;
}

function updateTodo(todo: PartialT, fieldsToUpdate: Partial<PartialT>) {
  return {...todo, ...fieldsToUpdate};
}

const PartialT1 = {
  title: 'organize desk',
  description: 'clear clutter',
}

const PartialT2 = updateTodo(PartialT1, {
//function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): {
  // title: string;
  // description: string;
// }
  description: 'throw out trash',
})

// # Readonly<T>

/**
 * [T]의 모든 프로퍼리를 읽기전용(readonly) 으로 설정한 타입을 구성합니다. 
 * 즉 생성된 타입의 프로퍼티를 재할당할 수 없습니다.
 */

interface ReadonlyT {
  title: string;
}

const ReadonlyT: Readonly<ReadonlyT> = {
  //type Readonly<T> = { readonly [P in keyof T]: T[P]; }
  // Readonly<interface & Type>
  title: 'Delete inactive users',
}

/**
 * 이 유틸리티는 런타임에, 실패할 할당 표현식을 나타낼 때 유용합니다.
 * 예): fronzen 객체(obeject)의 프로퍼티에 재할당 하려고 하는 경우
 */

// object.freeze

function freeze<T>(obj: T): Readonly<T>