class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "123123123123", "", "hello", 123456);

let blockchain: [Block] = [genesisBlock];

// blockchain.push("stuff"); 이런식으로는 작동 하지 않은 왜냐하면 block이 아니기떄문

console.log(blockchain);
export {};

// Theory part
// import { visitParameterList } from "typescript";

// // interface Human {
// //   name: string;
// //   age: number;
// //   gender?: string;
// // }

// // const person = {
// //   name: "sangwoo",
// //   age: 32,
// //   gender: "male",
// // };

// class Human {
//   public name: string;
//   public age: number;

//   // private age: number;   이Human class밖에서 age를 불러오거나 초기화할수 없음
//   public gender: string;
//   constructor(name: string, age: number, gender?: string) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

// const noh = new Human("nohsangwoo", 32, "male");

// const sayHi = (person: Human): string => {
//   const { name, age, gender } = person;
//   return `Hello ${name} , you are a ${age}, you are a ${gender}`;
// };

// console.log(sayHi(noh));

// export {};
// end of Theory part
