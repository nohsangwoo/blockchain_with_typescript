import { visitParameterList } from "typescript";

interface Human {
  name: string;
  age: number;
  gender?: string;
}

const person = {
  name: "sangwoo",
  age: 32,
  gender: "male",
};

const sayHi = (person: Human): string => {
  const { name, age, gender } = person;
  return `Hello ${name} , you are a ${age}, you are a ${gender}`;
};

console.log(sayHi(person));

export {};
