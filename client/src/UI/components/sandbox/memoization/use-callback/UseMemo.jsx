import { useMemo, useState } from "react";
import { Box, Paper, Typography, Button } from "@mui/material";

const UseMemo = () => {
    const [age, setAge] = useState(1);
    const [height, setHeight] = useState(1);

    const incrementAge = () => setAge(age + 1);
    const incrementHeight = () => setHeight(height + 1);

    const slowFunction = useMemo(() => {
        console.log("slow function");
        for (let i = 0; i < 2_000_000_000; i++) {}
        return age * 2;
    }, [age]);

    return (
        <Box sx={{ p: 6, display: 'flex', justifyContent: 'center', p: 2 }}>
            <Paper sx={{ width: '100%', my: 5, p: 3 }}>
                <Box>
                    <Typography align="center" color={"brown"}>Age * 2: {slowFunction}</Typography>
                    <Typography align="center">Height: {height}</Typography>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={incrementAge}  >Increment Age</Button>
                        <Button onClick={incrementHeight} >Increment Height</Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default UseMemo;