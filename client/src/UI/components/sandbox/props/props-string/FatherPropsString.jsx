import { Typography, Box } from '@mui/material';
import ChildPropsString from './ChildPropsString';

const FatherPropsString = () => {
    return (
        <Box sx={{border: '5px solid green '}}>
            <Typography m={2}  >Father Component</Typography>
            <Box sx={{
                m: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 300,
                width: 700,
                backgroundColor: 'secondary.dark',
            }}>
                <ChildPropsString victor="victorrr, I'm your father...."></ChildPropsString>
            </Box>
        </Box>
    )
}

export default FatherPropsString