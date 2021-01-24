// # Generic

// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);
// logText('Hi');
// logText(true);

function logText<T>(text: T):T {
    console.log(text);
    return text;
}

logText('Hi');         // function logText<"Hi">(text: "Hi"): "Hi"
logText<string>('Hi'); // function logText<string>(text: string): string
logText<number>(1);    // function logText<number>(text: number): number
logText<object>({});   // function logText<object>(text: object): object
logText<boolean>(true) // function logText<boolean>(text: boolean): boolean
logText<number[]>([]); // function logText<number[]>(text: number[]): number[]
logText<string[]>([]); // function logText<string[]>(text: string[]): string[]
logText<object[]>([]); // function logText<object[]>(text: object[]): object[]

function logTexts(text:string | number) {
    console.log(text)
    text.split('').reverse().join(''); 
    // Property 'split' does not exist on type 'string | number'.
    // Property 'split' does not exist on type 'number'.
    return text
}

function logNumbers(num: number) {
    console.log(num);
    return num;
}

function logInterSection(interSection: string & number) {
    console.log(interSection);
    return interSection;
}

logTexts('a');
logTexts(10); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// Union Type (text:string | number) not error

logNumbers(10); // function logNumbers(num: number): number
const num = logNumbers(10); // const num: number