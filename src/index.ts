const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name} , you are a ${age}, you are a ${gender}`;
};

console.log(sayHi("sangwoo", 32, "male"));

export {};
