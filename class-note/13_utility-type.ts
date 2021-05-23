/**
 *  유틸리티 타입이란?
 *
 *  유틸리티 타입은 이미 정의해 놓은 타입을 변환할 때 사용하기 좋은 타입 문법입니다.
 *  유틸리티 타입을 꼭 쓰지 않더라도 기존의 인터페이스, 제너릭 등의 기본 문법으로 타입을 변환할수 있지만,
 *  유틸리티 타입을 쓰면 훨씬 더 간결한 문법으로 타입을 정의할 수 있습니다.
 *
 *  변형해서 쓰고 싶을때, 사용한다.
 *  유틸리티 타입은 API 성향의 타입이다.
 */

// Partial : 파셜
// Partail 타입은 특정 타입의 부분 집합을 만족하는 타입을 정의할수 있다.

interface Address {
  email: string;
  address: string;
}

type MayHaveEmail = Partial<Address>;
const me: MayHaveEmail = {}; // 가능
const you: MayHaveEmail = { email: "test@test.com" }; // 가능
const all: MayHaveEmail = { email: "asdf@asdf.com", address: "asdf" }; // 가능

// Pick : 픽
// Pick 타입은

interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
  // something: object;
}

// 상품 목록을 받아오기 위한 API 함수
// function fetchProducts(): Promise<Product[]> {}

interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

// function displayProductDetail(shoppingItem: {
//   id: number;
//   name: string;
//   price: number;
// }) {}

// function displayProductDetail(shoppingItem: ProductDetail) {}

function displayProductDetail(
  shoppingItem: Pick<Product, "id" | "name" | "price">
  // Product에서  "id" | "name" | "price"를 뽑아낸 타입정의
) {}

type ShoppingItem = Pick<Product, "id" | "name" | "price">;

function pickProductDetail(
  shoppingItem: ShoppingItem
  // Product에서  "id" | "name" | "price"를 뽑아낸 타입정의
) {}

// Omit : 오밋
// Omit 타입은 특정 타입에서 지정된 속성만 제거한 타입을 정의해줍니다.

interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}

const phoneBook: Omit<AddressBook, "address"> = {
  // "address"를 제외한 타입 사용
  name: "재택근무",
  phone: 23421489,
  company: "내방",
};

const chingtao: Omit<AddressBook, "address" | "company"> = {
  name: "중국집",
  phone: 34345345098,
};
