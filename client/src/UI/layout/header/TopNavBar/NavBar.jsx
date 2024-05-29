import { AppBar, Box, Toolbar } from "@mui/material"
import { useTheme } from "../../../providers/ThemeProvider"
import MenuProvider from "./menu/MenuProvider"
import LeftNavBar from "./left-navigation/LeftNavBar"
import SearchBar from "./right-navigation/SearchBar"
import RightNavBar from "./right-navigation/RightNavBar"

const NavBar = () => {
    const { isDark } = useTheme()

    return (
        <MenuProvider>
            <AppBar position="sticky"> 
                <Toolbar sx={{ justifyContent: "space-between", backgroundColor: isDark ? "#182429" : "#4D3E4C" }}>
                    <LeftNavBar />

                    {/* only on sx screen, in the middle */}
                    <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
                        <SearchBar />
                    </Box>

                    <RightNavBar />
                </Toolbar>
            </AppBar>
        </MenuProvider>
    )
}

export default NavBar
