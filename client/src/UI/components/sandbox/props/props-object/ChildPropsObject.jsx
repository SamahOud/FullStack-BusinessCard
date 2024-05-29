import { Box, Typography } from '@mui/material';

// const ChildPropsObject = (props) => {
//     const {victor:{firstName, lastName}}  = props;

const ChildPropsObject = ({victor}) => {
    const {firstName, lastName}  = victor;
    return (
        <Box sx={{border: '5px solid black '}}>
            <Box sx={{
                height: 200,
                width: 200,
                backgroundColor: 'primary.dark',
                "&:hover": {
                    backgroundColor: 'error.main',
                    opacity: [0.9, 0.8, 0.7],
                }
            }}>
                <Typography  color="initial">Child Component</Typography>
                <Typography  color="initial">{firstName} - {lastName}</Typography>
            </Box>
        </Box>
    )
}

export default ChildPropsObject