import { Typography, Box } from '@mui/material';
import ChildPropsObject from './ChildPropsObject';

const FatherPropsObject = () => {
    const name = {
        firstName: 'Victor',
        lastName: 'Yampolsky'
    };

    return (
        <Box sx={{ border: '5px solid green ' }}>
            <Typography m={2}  >Father Component - Props Object</Typography>
            <Box sx={{
                m: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 300,
                width: 700,
                backgroundColor: 'secondary.dark',
            }}>
                <ChildPropsObject victor={name}></ChildPropsObject>
            </Box>
        </Box>
    )
}

export default FatherPropsObject