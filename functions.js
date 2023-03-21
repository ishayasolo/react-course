function calculator(a, b) {
  console.log(`first number: ${a}`);
  console.log(`second number: ${b}`);
  console.log(`${a} + ${b} = ${a + b}`);
  console.log(`${a} - ${b} = ${a - b}`);
  console.log(`${a} * ${b} = ${a * b}`);
  console.log(`${a} / ${b} = ${a / b}`);
}

// calculator(10, 5);
// console.log('-------------------');
// calculator(20, 5);
// console.log('-------------------');
// calculator(15, 3);

function sum(a, b) {
  return `the sum of ${a} and ${b} = ${a + b}`;
}

const value = sum(3, 12);

console.log(value)