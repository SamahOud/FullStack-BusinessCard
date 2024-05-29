import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { node } from "prop-types";
import { getToken, getUser } from "../services/localStorageService";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    // Get user data on mount and save it to the state. If there is a token
    const [token, setToken] = useState(() => {
        const tokenFromLS = getToken()
        if(tokenFromLS) {
            const userFromLS = getUser()
            setUser(userFromLS);
        }
        return tokenFromLS;
    })

    // to check if the user state is null, and if so, it retrieves the user
    // data from local storage and sets the user state with it
    useEffect(() => {
        if (!user) {
            const userFromLS = getUser();
            setUser(userFromLS);
        }
    }, [user])

    // It creates a value object using the useMemo hook
    const value = useMemo(() => ({ user, setUser, token, setToken }), [user, token]);

    return (
        // It provides the value object to its children components through the UserContext.Provider
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}

// The useUser custom hook uses the useContext hook to access the UserContext.
// It checks if the context is available and throws an error if not.
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}

UserContext.propTypes = {
    children: node.isRequired,
}