import { useState } from 'react';

const UseStateWithFunction = () => {
    const [count, setCount] = useState(0);
    
    const changeCount = (term = '') => {
        if (term === 'plus') {
            return setCount(count + 1);
        } else if (term === 'minus') {
            return setCount(count - 1);
        } else if (term === 'multiple') {
            return setCount(count * 2);
        } 
        setCount(0);
    }

    return (
        <div >
            <p>{count}</p>
            <button style={{ padding: 2, mx: 1 }} onClick={() => changeCount("plus")}>+</button>
            <button style={{ padding: 2, mx: 1 }} onClick={() => changeCount("minus")}>-</button>
            <button style={{ padding: 2, mx: 1 }} onClick={() => changeCount("multiple")}>multiple</button>
            <button style={{ padding: 2, mx: 1 }} onClick={() => changeCount()}>reset</button>
        </div>
    );
}
export default UseStateWithFunction;