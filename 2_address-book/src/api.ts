function fetchItems(): string[] {
    var items = ['a', 'b', 'c'];
    return items
}

let result = fetchItems();
console.log(result)

function fetchItems2(): Promise<string[]> {
    let items2: string[] = ['a', 'b', 'c'];
    return new Promise(function (resolve) {
        resolve(items2);
    })
}
fetchItems2(); //function fetchItems2(): Promise<string[]>