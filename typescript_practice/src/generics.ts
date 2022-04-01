function insertAtBeginning<T>(array:T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a','c','c'], 'd');

console.log(updatedArray[0].split(''));