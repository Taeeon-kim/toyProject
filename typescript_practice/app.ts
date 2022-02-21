function add(n1 : number, n2 : number){
    return n1 + n2;
}

function printResult(num: number){
    console.log('Result: ' + num);
    // return num;
}

printResult(add(5,12));

let someValue : (a: number, b: number)=> number; // number 인 인자인수? 를받고 number 로리턴한다라고 명시적 정의
someValue = add;
// someValue = printResult;
// someValue = 5;
console.log(someValue(7, 8));