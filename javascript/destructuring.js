const names = ["Ishaya", "Wande"]

// pull out both names
// and save each into different variables
const [firstName] = names

console.log(firstName)
// console.log(secondName)

// const [firstName, ...otherNames] = names

// console.log(firstName)
// console.log(otherNames)


const person = {
	name: 'Ishaya',
	course: 'React',
	location: {
		street: 'Ikorodu Road',
		state: 'lagos'
	}
}

const {
	name,
	course,
	location: {
		state
	}
} = person

console.log(name)
console.log(course)
console.log(state)