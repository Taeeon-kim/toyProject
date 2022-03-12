

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
console.log(combine(1,2,"as-number"))

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 0,
  AUTHOR,
} // Enum 타입으로 각각 인덱스 순서처럼 0, 1, 2 이 들어간다
const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};
console.log(Role);
// person.role.push('admin');
// person.role = [0, 'admin', 'user'] // 이런식으로 2개의 길이를 갖는 배열에 하나더 추가하면 에러가 뜨지만 push 는 예외적으로 작동한다
// person.role[1]= 10;

let favoriteActivities: string[]; // 문자열을 갖는 배열
favoriteActivities = ["Sports"];
console.log(person.name);

// for (const hobby of person.role){
//     console.log(hobby)
// }

if (person.role === Role.ADMIN) {
  console.log("is admin");
}

