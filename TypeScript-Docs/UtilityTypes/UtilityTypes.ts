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

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {...todo, ...fieldsToUpdate};
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
}

const todo2 = updateTodo(todo1, {
//function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): {
  // title: string;
  // description: string;
// }
  description: 'throw out trash',
})