// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];
// type inefernce.
// basically ts will make the type for the variable automatically.

let name1: string | number = 'some string';

// this will give errror saying type number is not assignable to type string.
// name1 = 5


type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Max',
  age: 32
};

// person = {
//   isEmployee: true
// };

let people: Person[];


// infered return typeis number. you can set it to be multiple types
function somefunc(a: number,b: number) {
  return a + b;
}

// here the return type can be number or string.
function somefunc1(a: number, b:number): number | string {
  return a + b;
}

// generics.
function insertAtStart<T>(arr: T[], val: T) {
  return [val, ...arr];
}

const numArr = [1,2,3];
const updatedArr = insertAtStart(numArr, 0);

// updatedArr[0].slice(0)