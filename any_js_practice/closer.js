let outer = () =>{
    let a = 1;
    let inner = () =>{
        return ++a;
    }
    return inner()
}

let outer2 = outer();
console.log(outer2);  //2
console.log(outer2);  //2
