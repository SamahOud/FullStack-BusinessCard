import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { node } from "prop-types";

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const toggleDarkMode = useCallback(() => { setIsDark(prev => !prev) }, [setIsDark]);

    const theme = createTheme({
        palette: {
            mode: isDark ? "dark" : "light",
        },
    })

    const value = useMemo(() => {
        return {
            toggleDarkMode,
            isDark,
        }
    }, [toggleDarkMode, isDark]);

    return (
        <MuiThemeProvider theme={theme}>
            <ThemeContext.Provider value={value}>
                {children}
            </ThemeContext.Provider>
        </MuiThemeProvider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

ThemeProvider.propTypes = {
    children: node.isRequired,
}
