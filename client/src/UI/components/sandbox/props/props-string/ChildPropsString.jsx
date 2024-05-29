import { Box, Typography } from '@mui/material';

const ChildPropsString = (props) => {
    const { victor } = props;

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
                <Typography  color="initial">{victor}</Typography>
            </Box>
        </Box>
    )

}

export default ChildPropsString