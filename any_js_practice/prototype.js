var Person = function (name){
    this._name = name;
}
console.log(Person.__proto__)
Person.prototype.getName  = function (){
    return this._name;
}

var suzi = new Person('Suzi', 28);
suzi.getName();
var iu = new Person('Jieun', 28);
iu.getName();
console.log(iu.__proto__)

// suzi.__proto__._name = 'SUZI_proto__';
// suzi.__proto__.getName();