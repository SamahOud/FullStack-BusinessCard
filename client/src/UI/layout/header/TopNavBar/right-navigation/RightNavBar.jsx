import { Box } from "@mui/material"
import { useState } from "react"
import IconButton from '@mui/material/IconButton'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

import { useTheme } from "../../../../providers/ThemeProvider"
import { useUser } from "../../../../components/users/providers/UserProvider"
import SearchBar from './SearchBar'
import NotLogged from './NotLogged'
import Logged from './Logged'
import MoreButton from './MoreButton'
import MenuBar from './MenuBar'

const RightNavBar = () => {
    const [anchorEl, setAnchor] = useState(null);
    const { isDark, toggleDarkMode } = useTheme();
    const { user } = useUser();

    const closeMenu = () => {
        setAnchor(null)
        console.log("you closed the menu");
    }

    return (
        <>
            <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
                <SearchBar />
                <IconButton sx={{ marginLeft: 1}} onClick={toggleDarkMode}>
                    {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>

                {!user && <NotLogged />}
                {user && <Logged />}
            </Box>

            <MoreButton />

            <MenuBar
                isMenuOpen={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onCloseMenu={closeMenu}
            />
        </>
    )
}

export default RightNavBar
