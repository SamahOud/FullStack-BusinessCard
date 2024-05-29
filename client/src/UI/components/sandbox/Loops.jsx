import Box from '@mui/material/Box';

const Loops = () => {
    const arrOfStrings = ['one', 'two', 'three', 'four', 'five'];
    //const arrOfStrings = [];
    if(!arrOfStrings.length) {
        return <div>There are no strings</div>
    }

    return (
        <Box m={2} >
            {arrOfStrings.map((str, index, arr) => {
                return <div  key={index} m={2}>{str}</div>
            })}
        </Box>
    )
}

export default Loops;