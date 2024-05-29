import useCounter from "./useCounter";
import Button from '@mui/material/Button'

const CustomCounterHook = () => {
    const [counter, inc, dec, res] = useCounter(0);

    return (
        <div style={{ padding: 85, textAlign: 'center', fontSize: 20, margin: 10 }}>
            <p>counter: {counter}</p>
            <Button variant="outlined" onClick={inc} sx={{ padding: 2,marginRight: 2 }}>
                increment
            </Button>

            <Button variant="outlined" onClick={dec} sx={{ padding: 2, marginRight: 2 }}>
                decrement
            </Button>
            
            <Button variant="outlined" onClick={res} sx={{ padding: 2, marginRight: 2 }}>
                reset
            </Button>
        </div>
    )
}
export default CustomCounterHook;