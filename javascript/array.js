const scores = [76, 55, 67];

const printNum = (num) => num + 20

console.log(printNum(70))

const newScores = scores.map(printNum);
const newScores2 = scores.map((num) => num - 10);

console.log(scores);
console.log(newScores);
console.log(newScores2);
