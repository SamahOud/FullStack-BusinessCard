import MuiMenu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Box, Divider } from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import IconButton from '@mui/material/IconButton'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

import { useUser } from "../../../../components/users/providers/UserProvider"
import  useUsers  from "../../../../components/users/hooks/useUsers"
import ROUTES from "../../../../../core/routes/routesModel"
import NavBarLink from "../../../../components/routes/NavBarLink"
import { useTheme } from "../../../../providers/ThemeProvider";

const MenuBar = ({ isMenuOpen, anchorEl, onCloseMenu }) => {
    const { user } = useUser()
    const { handleLogout } = useUsers()

    const onLogout = () => {
        handleLogout()
        onCloseMenu()
    }
    const { isDark, toggleDarkMode  } = useTheme()
    const styles = {
        color: isDark ? '#f7f5f5' : '#5f6974',
    }

    return (
        <MuiMenu
            open={isMenuOpen}
            onClose={onCloseMenu}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
        >
            { user && (
                <Box >
                    <NavBarLink to={`${ROUTES.USER_PROFILE}/${user._id}`}>
                        <MenuItem sx={{...styles, paddingLeft: 1}} onClick={onCloseMenu}><PersonIcon sx={{marginRight: 1}}/>Profile</MenuItem>
                    </NavBarLink>
                    <Divider />

                    <NavBarLink to={`${ROUTES.EDIT_USER}/${user._id}`}>
                        <MenuItem sx={{...styles, paddingLeft: 1}} onClick={onCloseMenu}><EditIcon sx={{marginRight: 1}}/>Account</MenuItem>
                    </NavBarLink>
                    <Divider />

                    <NavBarLink to={ROUTES.LOGIN}>
                        <MenuItem sx={{...styles, paddingLeft: 1}} onClick={onLogout}><LogoutRoundedIcon sx={{marginRight: 1}}/>Logout</MenuItem>
                    </NavBarLink>
                    <Divider />
                </Box>
            )}

            { user && user.isAdmin && (
                <Box >
                    <NavBarLink to={ROUTES.ADMIN_PAGE}>
                        <MenuItem sx={{...styles, paddingLeft: 1}} onClick={onCloseMenu}><DashboardIcon sx={{marginRight: 1}}/>Dashboard</MenuItem>
                    </NavBarLink>
                    <Divider />
                </Box>
            )}
            
            <NavBarLink to={ROUTES.ABOUT}>
                <MenuItem sx={{...styles, paddingLeft: 1}} onClick={onCloseMenu}><InfoRoundedIcon sx={{marginRight: 1}}/>About</MenuItem>
            </NavBarLink>
            <Divider />

            <MenuItem sx={{...styles, paddingLeft: 1}} onClick={onCloseMenu}>
                <IconButton sx={{margin: 0,paddingLeft: 0}} onClick={toggleDarkMode}>
                    {isDark ? <LightModeIcon sx={{margin: 0}}/> : <DarkModeIcon sx={{margin: 0}}/>}
                </IconButton>{isDark ? 'Light' : 'Dark'}
            </MenuItem>
            
            { !user && (
                <Box>
                    <Divider />
                    <NavBarLink to={ROUTES.LOGIN}>
                        <MenuItem
                            sx={{ ...styles, paddingLeft: 1, display: { xs: "block", md: "none" }}}
                            onClick={onCloseMenu}
                        >
                            <LoginIcon sx={{marginRight: 1}}/>Login
                        </MenuItem>
                    </NavBarLink>
                    <Divider />

                    <NavBarLink to={ROUTES.SIGNUP}>
                        <MenuItem
                            sx={{ ...styles, paddingLeft: 1, display: { xs: "block", md: "none" } }}
                            onClick={onCloseMenu}
                        >
                            <AppRegistrationRoundedIcon sx={{marginRight: 1}}/>SignUp
                        </MenuItem>
                    </NavBarLink>
                </Box>
            )}
        </MuiMenu>
    )
}

export default MenuBar
