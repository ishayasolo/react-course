import React from "react";

function Counter() {
	const [counter, setCounter] = React.useState(0)

  const  evaluateCount = (expression) => setCounter(expression)

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
          <button onClick={() => evaluateCount(counter - 1)}>- 1</button>
          <button onClick={() => evaluateCount(counter + 1)}>+ 1</button>
        </div>
        <div style={{
					display: 'flex',
          gap: '1rem',
					alignItems: 'center',
          justifyContent: 'center',
        }}>
          <button onClick={() => evaluateCount(counter - 5)}>- 5</button>
          <button onClick={() => evaluateCount(counter + 5)}>+ 5</button>
        </div>
        <div style={{
					display: 'flex',
          gap: '1rem',
					alignItems: 'center',
          justifyContent: 'center',
        }}>
          <button onClick={() => evaluateCount(counter - 15)}>- 15</button>
          <button onClick={() => evaluateCount(counter + 15)}>+ 15</button>
        </div>
        <div style={{
					display: 'flex',
          gap: '1rem',
					alignItems: 'center',
          justifyContent: 'center',
        }}>
          <button onClick={() => evaluateCount(counter * 10)}>* 10</button>
          <button onClick={() => evaluateCount(counter / 10)}>/ 10</button>
        </div>
        <div style={{
					display: 'flex',
          gap: '1rem',
					alignItems: 'center',
          justifyContent: 'center',
        }}>
          <button onClick={() => evaluateCount((counter - 10) / 2)}>
            (- 10) / 2
          </button>
          <button onClick={() => evaluateCount((counter + 10) * 2)}>
            (+ 10) * 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;


// useEffect()
