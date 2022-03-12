const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

function clickHandler(message:string){
  console.log('Click'+message);
}

button.addEventListener("click", clickHandler.bind(null,'1'));

const map = new Map();