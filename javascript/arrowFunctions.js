// function sum(a, b) {
// 	return a + b
// }

// console.log(sum(30, 12))

const sum = (a, b) => a + b

console.log(sum(30, 12))

// function sayHello(person) {
// 	return `Hello ${person}`
// }

const sayHello = person => `Hello ${person}`
console.log(sayHello("Abel"))


const callSayHello = (name) => sayHello(name)
console.log(callSayHello("Ishaya"))

const printAnything = () => {
	console.log("yooo!")
}

printAnything();