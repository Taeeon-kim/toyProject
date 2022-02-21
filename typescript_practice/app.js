// const person : {
//     name : string;
//     age : number;
// } = {
//     const person :{
//         name : string;
//         age : number;
//         hobbies : string[];
//         role : [number, string]; //tuple type 로 스페셜 타입
//     } ={
//     name : 'Maximilian',
//     age : 30,
//     hobbies: ['Sports', 'Cooking'],
//     role : [2, 'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 0] = "READ_ONLY";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
})(Role || (Role = {}));
; // Enum 타입으로 각각 인덱스 순서처럼 0, 1, 2 이 들어간다
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
console.log(Role);
// person.role.push('admin'); 
// person.role = [0, 'admin', 'user'] // 이런식으로 2개의 길이를 갖는 배열에 하나더 추가하면 에러가 뜨지만 push 는 예외적으로 작동한다
// person.role[1]= 10;
var favoriteActivities; // 문자열을 갖는 배열
favoriteActivities = ['Sports'];
console.log(person.name);
// for (const hobby of person.role){
//     console.log(hobby) 
// }
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
