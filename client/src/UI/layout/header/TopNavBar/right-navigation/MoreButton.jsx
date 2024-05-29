import { Box, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useMenu } from '../menu/MenuProvider';

const MoreButton = () => {
    const setOpen = useMenu()

    return (
        <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
            <IconButton
                aria-label="menu"
                onClick={() => setOpen(true)}
                size='large'
                color='inherit'
                >
                    <MoreVertIcon />
            </IconButton>
        </Box>
    )
}

export default MoreButton
