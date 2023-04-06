import React, { useEffect, useState } from 'react'

const APIQuotes = () => {
	const [quotes, setQuotes] = useState([])

	useEffect(() => {
		for (let i = 0; i < 5; i++) {
			fetch('https://api.quotable.io/random')
				.then((response) => response.json())
				.then((data) => {
					setQuotes((quote) => [
						...quote,
						{
							author: data.author,
							content: data.content,
						}
					])
				})
		}
	}, [])

	// { author: "Ishaya Solomon", content: "just dey play!" }
	// { author: "Fortunate", content: "stop playing!" }

	// [ { author: "Ishaya Solomon", content: "just dey play!" }, { author: "Fortunate", content: "stop playing!" } ]

	if (quotes.length > 0) {
		return (
			<>
				{quotes.map(item => (
					<>
						<span style={{ color: 'red' }}>
							{item.author}
						</span>
						<span> said </span>
						<span style={{ color: 'green' }}>
							{item.content}
						</span>
						<br />
						<br />
					</>
				))}
			</>
		)
	} else {
		return <h1>loading...</h1>
	}

	// return (
	// 	<div>
	// 		{quotes.length > 0 ? (
	// 			quotes.map(item => (
	// 				<>
	// 					<span style={{ color: 'red' }}>
	// 						{item.author}
	// 					</span>
	// 					<span> said </span>
	// 					<span style={{ color: 'green' }}>
	// 						{item.content}
	// 					</span>
	// 					<br />
	// 					<br />
	// 				</>
	// 			))
	// 		) : (
	// 			<h1>loading....</h1>
	// 		)}
	// 	</div>
	// )
}

export default APIQuotes

// https://api.quotable.io/random