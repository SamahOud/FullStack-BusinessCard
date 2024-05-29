import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import { bool, func } from 'prop-types'

const CardDeleteDialog = ({ isDialogOpen, onDelete, onChangeDialog }) => {
    return (
        <Dialog 
            open={isDialogOpen}
            onClose={onChangeDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="xs"
        >
            <DialogTitle id="alert-dialog-title" >{"Are you sure you want ot delete this card"}</DialogTitle>
            
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    this operation will delete the card permanently, this card will not be recoverable.
                    all the data will be lost. are you sure you want to delete this card?
                </DialogContentText>
            </DialogContent>
            
            <DialogActions>
                <Button onClick={onChangeDialog} color='primary'>Cancel</Button>
                <Button onClick={onDelete} autoFocus color="error">Yes, Delete</Button>
            </DialogActions>
        </Dialog>
    )
}

CardDeleteDialog.propTypes = {
    isDialogOpen: bool.isRequired,
    onDelete: func.isRequired,
    onChangeDialog: func.isRequired,
}

export default CardDeleteDialog
