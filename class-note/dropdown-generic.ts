/**
 *
 */

interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

const emails: DropdownItem<string>[] = [
  { value: "google.com", selected: true },
  { value: "yahoo.co.jp", selected: false },
  { value: "naver.com", selected: false },
];

const;

// interface Email {
//   value: string;
//   selected: boolean;
// }

// const emails: { value: string; selected: boolean }[] = [
//   { value: "google.com", selected: true },
//   { value: "yahoo.co.jp", selected: false },
//   { value: "naver.com", selected: false },
// ];

// const emails: Email[] = [
//   { value: "google.com", selected: true },
//   { value: "yahoo.co.jp", selected: false },
//   { value: "naver.com", selected: false },
// ];

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

// interface TrueFalse {
//   value: boolean;
//   selected: boolean;
// }

// const numberOfProducts: { value: number; selected: boolean }[] = [
//   { value: 1, selected: true },
//   { value: 2, selected: false },
//   { value: 3, selected: false },
// ];

// const numberOfProducts: ProductNumber[] = [
//     { value: 1, selected: true },
//     { value: 2, selected: false },
//     { value: 3, selected: false },
//   ];

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// function createDropdownItem(
//   item:
//     | { value: number; selected: boolean }
//     | { value: string; selected: boolean }
// ) {
//   const option = document.createElement("option");
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// function createDropdownItem(
//   item: Email | ProductNumber
//   //   | { value: number; selected: boolean }
//   //   | { value: string; selected: boolean }
// ) {
//   const option = document.createElement("option");
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

function createDropdownItem(
  item: DropdownItem<string> | DropdownItem<number>
  //   | { value: number; selected: boolean }
  //   | { value: string; selected: boolean }
) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem(product);
});

// # Union Delate

function createDropdownItem2<T>(
  item: DropdownItem<T>
  //   | { value: number; selected: boolean }
  //   | { value: string; selected: boolean }
) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

emails.forEach(function (email) {
  const item = createDropdownItem2<string>(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem2<number>(product);
});
