import { useState } from "react"
import HelloWorld from "./HelloWorld"
import ByeWorld from "./ByeWorld"

const Conditional = () => {
	const [hasMoney, setHasMoney] = useState(true)
	const [isReadyToGo, setIsReadyToGo] = useState(true)
	const handleClick = () => setHasMoney(!hasMoney)
	const flipReadiness = () => setIsReadyToGo(!isReadyToGo)

	return (
		<>
			I get money? {hasMoney ? "Yes" : "No"}
			<br />
			{hasMoney ? "I dey go club" : "Hide your face"}
			<br />
			<button onClick={handleClick}>change state</button>
			<br />
			<br />
			<br />
			{isReadyToGo ? <ByeWorld /> : <HelloWorld /> }
			<br />
			<button onClick={flipReadiness}>Change readiness</button>
		</>
	)
}

export default Conditional