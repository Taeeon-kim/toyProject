let a ="";
if(true){
    let a =2; //재 선언시 이 블록안에서만의 새로운 ㅁ로 선언, 할당됨
    a = 3;
    console.log(a)
}
function inits (){
if(true){
    a= " aa"; // 만약 let a가 아닌 기존 a 에 할당하면 블록이후에도 전역 a값이 업데이트됨

}

}
// inits()
console.log(a) // 블록밖에서는 기존 전역변수 a값 ""으로 나옴

function differ (){
    console.log(a)
}

differ()