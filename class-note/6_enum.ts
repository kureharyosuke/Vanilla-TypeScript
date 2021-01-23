// Enum 
// 옵션 선택  or 드롭다운 dropdown


enum Shoes {
    Nike = 'nike',
    Adidas = 'adidas',
    onizuka = 'オニツカタイガー' // (enum member) Shoes.onizuka = "\u30AA\u30CB\u30C4\u30AB\u30BF\u30A4\u30AC\u30FC"
}

var myShoes = Shoes.Nike;
console.log(myShoes); //(enum member) Shoes.Nike = 0
var youShoes = Shoes.Adidas;
console.log(youShoes); //(enum member) Shoes.Adidas = 1 


/** JS // https://www.typescriptlang.org/play?#code/KYOwrgtgBAygFge2AZygbwFBW1AcgSwGtgoBeKAchCOAoBoscBBAE3xYENVyKO3Pk9RtgTUAXmEIcylQFUMgaYZAIwyBqhkD9DIBKGQDUMgH4YKUAPT6oAClCQoEYBABGwAE4BKWIhQA6UfglSZAIgA6YADMAAxMTAEhAMIAQhHBkQAscUyxQcHRAGLJSWlMkXEZkT4YAL4YGABuHHYWAJ7wSNzOja4ExADcGADGosgIADbArv0IAObGEPUuyA7tBvqm4NCWNvZODW5tJOTBldVQtQhgG00nrqzsXJ09IH2Dw2PGh8fTs-OL5iu2js1uFwIyACMUCAA
 
* "use strict";
var Shoes;
(function (Shoes) {
    Shoes["Nike"] = "nike";
    Shoes["Adidas"] = "adidas";
    Shoes["onizuka"] = "\u30AA\u30CB\u30C4\u30AB\u30BF\u30A4\u30AC\u30FC"; // (enum member) Shoes.onizuka = "\u30AA\u30CB\u30C4\u30AB\u30BF\u30A4\u30AC\u30FC"
})(Shoes || (Shoes = {}));

var myShoes = Shoes.Nike;
console.log(myShoes); //(enum member) Shoes.Nike = 0
var youShoes = Shoes.Adidas;
console.log(youShoes); //(enum member) Shoes.Adidas = 1  

*/

enum city {
    tokyo = 10, 
    nagoya, //(enum member) city.nagoya = 11
    osaka = 54,
    fukuoka, //(enum member) city.fukuoka = 55
    okinawa
}

var myCity = city.tokyo //(enum member) city.tokyo = 10
console.log(myCity);

// Ex)

enum Answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestion(answer: Answer) { 
    if(answer === Answer.Yes) {
        console.log('정답입니다.');
    }
    if(answer === Answer.No) {
        console.log('오답입니다.');
    }
}
function askQuestion2(answer: string) { 
    if(answer === 'Yes') {
        console.log('정답입니다.');
    }
    if(answer === 'No') {
        console.log('오답입니다.');
    }
}
askQuestion(Answer.Yes)
askQuestion('Yes')
// askQuestion('Not')
// askQuestion('No')
