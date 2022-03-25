// const userName ='Max'

class Department{
    
    name: string;
    constructor(n: string){
        this.name=n;
    }
}
const accounting = new Department("accounting");
console.log(accounting)

var result;
result=1;

function add1(a: number=1, b:number){
    var result = a+b;
    
    return result
}

const hobbies =["sport","cooking"];
const active=["swim"];
active.push(...hobbies)
console.log(active)
const dds = (...numbers:number[])=>{
console.log(numbers)
}
const bdd= dds(5,10,2,3.7);

const person1 ={
 firstName: 'Max',
 age: 30
}

const {firstName:userName, age} =person1;

console.log(person1)