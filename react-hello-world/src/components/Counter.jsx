import React from "react";

function Counter() {
	const [counter, setCounter] = React.useState(0)

	function increment() {
		setCounter(counter + 1)
	}

	function decrement() {
		setCounter(counter - 1)
	}

	function incrementBy5() {
		setCounter(counter + 5)
	}

	function decrementBy5() {
		setCounter(counter - 5)
	}

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
			>
      <div
        style={{
					display: 'flex',
          gap: '1rem',
          flexDirection: 'column',
          justifyContent: 'center',
					alignItems: 'center',
        }}
				>
        <h1>Counter</h1>
        <h1>{counter}</h1>
        <div style={{
					display: 'flex',
          gap: '1rem',
					alignItems: 'center',
          justifyContent: 'center',
        }}>
          <button onClick={decrement}>- 1</button>
          <button onClick={increment}>+ 1</button>
        </div>
        <div style={{
					display: 'flex',
          gap: '1rem',
					alignItems: 'center',
          justifyContent: 'center',
        }}>
          <button onClick={decrementBy5}>- 5</button>
          <button onClick={incrementBy5}>+ 5</button>
        </div>
        <div style={{
					display: 'flex',
          gap: '1rem',
					alignItems: 'center',
          justifyContent: 'center',
        }}>
          <button onClick={() => {}}>- 15</button>
          <button onClick={() => {}}>+ 15</button>
        </div>
        <div style={{
					display: 'flex',
          gap: '1rem',
					alignItems: 'center',
          justifyContent: 'center',
        }}>
          <button onClick={() => {}}>* 10</button>
          <button onClick={() => {}}>/ 10</button>
        </div>
        <div style={{
					display: 'flex',
          gap: '1rem',
					alignItems: 'center',
          justifyContent: 'center',
        }}>
          <button onClick={() => {}}>(- 10) / 2</button>
          <button onClick={() => {}}>(+ 10) * 2</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;


// useEffect()
