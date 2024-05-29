import { number } from "prop-types";
import { useState } from "react";

const useCounter = (initialCount = 0) => {
    const [count, setCount] = useState(initialCount);
    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(initialCount);

    return [
        count,
        increment,
        decrement,
        reset
    ];
}

useCounter.propTypes = {
    initialCount: number
}

export default useCounter;