function GreetEveryone(props) {
  return (
    <>
      <h1>Hello {props.personName}</h1>
			<h1>course: {props.course}</h1>
			<h1>Gender: {props.gender}</h1>
			<h1>Duration: {props.duration}</h1>
    </>
  );
}

export default GreetEveryone
