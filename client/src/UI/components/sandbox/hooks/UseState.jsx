import { useState } from 'react';

const UseState = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div >
            <p>{counter}</p>
            <button style={{ padding: 2, mx: 1 }} onClick={() => setCounter((prev) => prev + 1)}>+</button>
            <button style={{ padding: 2, mx: 1 }} onClick={() => setCounter((prev) => prev - 1)}>-</button>
            <button style={{ padding: 2, mx: 1 }} onClick={() => setCounter((prev) => prev * 2)}>multiple</button>
            <button style={{ padding: 2, mx: 1 }} onClick={() => setCounter(0)}>reset</button>
        </div>
    )
}

export default UseState