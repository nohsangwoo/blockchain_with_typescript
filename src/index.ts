import { visitParameterList } from "typescript";

// interface Human {
//   name: string;
//   age: number;
//   gender?: string;
// }

// const person = {
//   name: "sangwoo",
//   age: 32,
//   gender: "male",
// };

class Human {
  public name: string;
  public age: number;

  // private age: number;   이Human class밖에서 age를 불러오거나 초기화할수 없음
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const noh = new Human("nohsangwoo", 32, "male");

const sayHi = (person: Human): string => {
  const { name, age, gender } = person;
  return `Hello ${name} , you are a ${age}, you are a ${gender}`;
};

console.log(sayHi(noh));

export {};
