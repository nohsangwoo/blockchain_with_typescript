import * as CryptoJS from "crypto-js";

class Block {
  // sayHello = () => "hello"; 이런식의 함수는  new Block으로 객체를 생성해줘야 사용가능

  // new Block 없이 바로 사용가능하게 하고싶을땐 static 써주면됨
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    data: string,
    timestamp: number
  ): string => {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
  };

  // 유효성 검사
  static validateStructure = (aBlock: Block): boolean => {
    return (
      typeof aBlock.index === "number" &&
      typeof aBlock.hash === "string" &&
      typeof aBlock.previousHash === "string" &&
      typeof aBlock.timestamp === "number" &&
      typeof aBlock.data === "string"
    );
  };

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

// ------------------------ blockchain을 생성
const genesisBlock: Block = new Block(0, "123123123123", "", "hello", 123456);

// blockchain은 block형식의 배열이고, genesisBlock을 배열중 하나로 가지게된다.
let blockchain: Block[] = [genesisBlock];
// blockchain.push("stuff"); 이런식으로는 작동 하지 않은 왜냐하면 block이 아니기떄문

// ------------------------- blockchain을 control
// getBlockchain은 Block[]형식의 배열이고 모든 blockchain을 반환한다(blockchain을 배열의 모든 내용)
const getBlockchain = (): Block[] => blockchain;

// 하나의 Block을 반환하는 형식이고 가장 마지막의 Block을 반환한다
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  // 가장 최신의 마지막 Block
  const previousBlock: Block = getLatestBlock();

  // 가장 마지막 index를 가져와서 + 1 해주고 newIndex에 넣어줌
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    data,
    newTimestamp
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimestamp
  );

  return newBlock;
};

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  // 유효성 검사를 실패하면 false를 반환
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  }
};

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
