import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
// import IconButton from '@mui/material/IconButton'
import Fab from '@mui/material/Fab'

const ButtonComponent = () => {
    return (
        <Box sx={{ "& button": { m: 1 } }} >
            <Button variant='text' size='small' startIcon={<DeleteIcon />}>Simple Btn</Button>
            <Button variant='contained' size='medium' endIcon={<SendIcon />} >Full Btn</Button>
            <Button variant='outlined' size='large' endIcon={<SendIcon />} fullWidth>Bordered Btn</Button>
            <Button variant='contained' disabled>Non Functional Btn</Button>
            
            <Fab color="primary" aria-label="add">
                <AddShoppingCartIcon /> 
            </Fab>
        </Box>
    )
}

export default ButtonComponent