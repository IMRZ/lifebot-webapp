
const test = "hello, there. . how are you";

const result = test.split(/([\., ])/g)
  .filter(s => s.length !== 0 && s !== ' ');

console.log(result);
