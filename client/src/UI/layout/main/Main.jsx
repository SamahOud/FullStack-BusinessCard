import { Box } from "@mui/material"
import { node } from "prop-types";

import { useTheme } from "../../providers/ThemeProvider"

const Main = ({ children }) => {
    const { isDark } = useTheme();
    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: isDark ? "#2c3e50" : "#caf0f8" }}>
            {children}
        </Box>
    )
}

Main.propTypes = {
    children: node.isRequired
}

export default Main
