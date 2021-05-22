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

/**클래스 식별자 선언부에 <T>라는 못보던 문법이 추가된 것을 확인할 수 있다. 
 * 제네릭을 사용하겠다는 의미로 꺽쇠(Angle brackets)를 넣고 그 안에 타입으로 사용되는 식별자를 집어넣는다.

T는 Type의 약자로 다른 언어에서도 제네릭을 선언할 때 관용적으로 많이 사용된다. 
이 부분에는 식별자로 사용할 수 있는 것이라면 무엇이든 들어갈 수 있다. 
이를테면 $나 _도 가능하다는 의미다. 
하지만 대개의 경우 T를 사용한다. 
여기에서 T를 타입 변수(Type variables)라고 한다. */


//T는 Type의 약자

// # Partial<T>

/**
 *  [T: Type]의 모든 프로퍼티를 선택적으로 만드는 타입을 구성합니다.
 *  이 유틸리티는 주어진 타입의 모든 하위 타입 집합을 나타내는 타입을 반환합니다.
 */

interface PartialT {
  title: string;
  description: string;
}

function updateTodo(todo: PartialT, fieldsToUpdate: Partial<PartialT>) {
  return {...todo, ...fieldsToUpdate};
}

const PartialT_variable = {
  title: 'organize desk',
  description: 'clear clutter',
}

const PartialT_variable2 = updateTodo(PartialT_variable, {
//function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): {
  // title: string;
  // description: string;
// }
  description: 'throw out trash',
})

// # Readonly<T>

/**
 * [T:Type]의 모든 프로퍼리를 읽기전용(readonly) 으로 설정한 타입을 구성합니다. 
 * 즉 생성된 타입의 프로퍼티를 재할당할 수 없습니다.
 */

interface ReadonlyT {
  title: string;
}

const ReadonlyT_variable: Readonly<ReadonlyT> = {
  //type Readonly<T> = { readonly [P in keyof T]: T[P]; }
  // Readonly<interface & Type>
  title: 'Delete inactive users',
}

/**
 * 이 유틸리티는 런타임에, 실패할 할당 표현식을 나타낼 때 유용합니다.
 * 예): fronzen 객체(obeject)의 프로퍼티에 재할당 하려고 하는 경우
 */

// object.freeze

// : function freeze<T>(obj: T): Readonly<T>


// # Record<K, T>

/**
 * 타입 [T]의 프로퍼티의 집합 K로 타입을 구성합니다. 
 * 이 유틸리티는 타입의 프로퍼티들을 다른 타입에 매핑시키는 데 사용할 수 있습니다.
 */

interface RecordKT {
  title: string ;
}

type Page = 'home' | 'about' | 'contact'

const RecordKT_variable: Record<Page, RecordKT> = {
  about: {title: 'about'},
  contact: {title: 'contact'},
  home: {title: 'home'}
}

// # Pick<T, K>

/**
 * T에서 프로퍼티 K의 집합을 선택해 타입을 구성된다.
 */

interface PickTK {
  title: string;
  descrition: string;
  completed: boolean;
}

type PickPreview = Pick<PickTK, 'title' | 'completed'>

const PickTK_variable : PickPreview = {
  title: 'Clean room',
  completed: false,
}