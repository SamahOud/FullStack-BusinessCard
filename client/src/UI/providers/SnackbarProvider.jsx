import { node } from "prop-types";
import React, { useCallback, useContext, useState } from "react";
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const SnackbarContext = React.createContext(null)
export const SnackbarProvider = ({ children }) => {
    const [isSnackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState("in snackbar");
    const [snackColor, setSnackColor] = useState("success");
    const [snackVariant, setSnackVariant] = useState("filled");

    /* 
        It provides a setSnack function using useCallback to update these 
        state variables and display the snackbar with the specified color, 
        message, and variant. It also renders a Snackbar component from a 
        UI library, providing the snackbar content based on the state.
    */
    const setSnack = useCallback((color, message, variant = "filled") => {
        setSnackOpen(true);
        setSnackColor(color);
        setSnackVariant(variant);
        setSnackMessage(message);
    }, []);

    return (
        <>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isSnackOpen}
                onClose={() => setSnackOpen(prev => !prev)}
                autoHideDuration={5000}
            >
                <Alert severity={snackColor} variant={snackVariant} sx={{ marginTop: '22%'}}>
                    {snackMessage}
                </Alert>
            </Snackbar>

            <SnackbarContext.Provider value={setSnack}>
                {children}
            </SnackbarContext.Provider>
        </>
    )
}

export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    if (!context) {
        throw new Error("useSnackbar must be used within a SnackbarProvider");
    }
    return context;
}

SnackbarProvider.propTypes = {
    children: node.isRequired,
}