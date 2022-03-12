// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

function printResult(num: number) {
  console.log("Result: " + num);
  // return num;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  return cb(result);
}

printResult(6)
// printResult(add(5, 12));

let someValue: (a: number, b: number) => number; // number 인 argument 를받고 number 로리턴한다라고 명시적 정의
// someValue = add;
// someValue = printResult;
// someValue = 5;
// console.log(someValue(7, 8));
addAndHandle(10,20,(result)=>{
    console.log(result)
})

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({data: "Success"});
}
 
sendRequest('Send this!', (response) => { 
  console.log(response);
  return true;
 });

 function aa (number:number): string {  //매게변수 와 반환값을 정의한다. number로 받아도 반환값을 string으로 지정하면 string으로 반환해야한다.
   return "2"
 }

 console.log(aa(2));