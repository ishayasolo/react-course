import React from "react"

const Forms = () => {
	const [name, setName] = React.useState("")
	const [students, setStudents] = React.useState([])

	const handleChange = (event) => {
		setName(event.target.value)
	}
	const submitName = () => setStudents(students => [
		...students,
		name,
	])
	const printNames = () => console.log(students)

	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={handleChange}
				placeholder="Input name"
			/>
			<button onClick={submitName}>Submit</button>
			<br />
			{students}
			<button onClick={printNames}>print</button>
		</div>
	)
}
export default Forms