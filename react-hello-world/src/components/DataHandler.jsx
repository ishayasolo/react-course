const DataHandler = () => {
	const peopleInfo = [
		{
			name: "Ishaya",
			course: "React",
			role: "tutor",
			isVirtual: true,
			location: {
				streetAddress: "39, Ikorodu Road",
				state: "Lagos",
				country: "Nigeria",
			}
		},
		{
			name: "Fortunate",
			course: "React",
			role: "fellow",
			isVirtual: true,
			location: {
				streetAddress: "39, Ikorodu Road",
				state: "Lagos",
				country: "Nigeria",
			}
		},
		{
			name: "Rufai",
			course: "React",
			role: "fellow",
			isVirtual: false,
			location: {
				streetAddress: "39, Ikorodu Road",
				state: "Lagos",
				country: "Nigeria",
			}
		},
	];

	return (
		<div>
			{
				peopleInfo.map((person) => (
					<>
						<br />
						name: {person.name}
						<br />
						role: {person.role}
						<br />
						preferred learning model: {person.isVirtual ? "Virtual" : "Onsite"}
						<br />
					</>
				))
			}
		</div>
	)
}

export default DataHandler