function test(){
let a=0;
while(a<10000){
    a++;
}
return document.querySelector('#root').innerHTML=a;
}

export default test;