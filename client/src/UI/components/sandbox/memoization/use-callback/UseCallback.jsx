import { useCallback, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import ButtonComp from "./ButtonComp";

const UseCallBack = () => {
    const [age, setAge] = useState(1);
    const [height, setHeight] = useState(1);

    const incrementAge = useCallback(() => setAge(age + 1), [age]);
    const incrementHeight = useCallback(() => setHeight(height + 1) , [height]);

    return (
        <Box sx={{ p: 6, display: 'flex', justifyContent: 'center' }}>
            <Paper sx={{ width: '100%', my: 5, p: 3 }} elevation={6}>
                <Box>
                    <Typography align="center">Age: {age}</Typography>
                    <Typography align="center">Height: {height}</Typography>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                        <ButtonComp handleClick={incrementAge} name="incrementAge" value={age} >Increment Age</ButtonComp>
                        <ButtonComp handleClick={incrementHeight} name="incrementHeight" value={height}>Increment Height</ButtonComp>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default UseCallBack;