import { node } from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

const NameContext = createContext(null);

export const NameProvider = ({ children }) => {
    const [name, setName] = useState();

    useEffect(() => {
        setName('David');
    }, [])

    return (
        <NameContext.Provider value={{ name, setName }}>
            {children}
        </NameContext.Provider>
    )
};

export const useName = () => {
    const context = useContext(NameContext);
    if (!context) {
        throw new Error('useName must be used within NameProvider');
    }
    return context;
};

NameProvider.propTypes = {
    children: node.isRequired,
};








