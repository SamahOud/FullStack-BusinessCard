import { Typography, Box } from '@mui/material';
import ChildPropsTwoKeys from './ChildPropsTwoKeys';

const FatherPropsTwoKeys = () => {
    const name = {
        firstName: 'Victor',
        lastName: 'Yampolsky'
    };

    return (
        <Box sx={{ border: '5px solid green ' }}>
            <Typography m={2}  >Father Component - Props TwoKeys</Typography>
            <Box sx={{
                m: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 300,
                width: 700,
                backgroundColor: 'secondary.dark',
            }}>
                <ChildPropsTwoKeys fname={name.firstName} lname={name.lastName}></ChildPropsTwoKeys>
            </Box>
        </Box>
    )

}

export default FatherPropsTwoKeys