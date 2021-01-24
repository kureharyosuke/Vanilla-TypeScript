/**
 *  
 */

const emails = [
    { value: 'google.com', selected: true},
    { value: 'yahoo.co.jp', selected: false},
    { value: 'naver.com', selected: false}
];

const numberOfProducts = [
    { value: 1, selected: true},
    { value: 2, selected: false},
    { value: 3, selected: false},
]

function createDropdownItem(item: { value: string; selected: boolean}){
    const option = document.createElement('option');
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;
    return option
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
    const item = createDropdownItem(email);
    const selectTag = document.querySelector('#email-dropdown')
    selectTag.appendChild(item);
})