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