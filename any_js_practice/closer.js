// 일반 외부, 내부함수 스코프 결과
let outer1 = () => {
  let a = 1;
  let inner = () => {
    return ++a;
  };
  return inner();
};

let outer1_2 = outer1();
console.log(outer1_2); //2
console.log(outer1_2); //2

//클로저 함수 외부 내부 스코프 결과
let outer2 = () => {
  let a = 1;
  let inner = () => {
    return ++a;
  };
  return inner;
};

let outer2_2 = outer2();
console.log(outer2_2()); //2
console.log(outer2_2()); //3
outer2_2= null; // 클로저의 메모리 헤제
// console.log(outer2_2());

// Return 없이도 클로저 발생하는 경우
// 1) setInterval 클로저 발생, 즉시실행함수

(function (){
    let a =0;
    let intervalid =null;
    let inner = function(){
        if(++a>=5){
            clearInterval(intervalid);
        }
        console.log(a)
    }
    intervalid = setInterval(inner, 1000)
    console.log("여기")

})();

