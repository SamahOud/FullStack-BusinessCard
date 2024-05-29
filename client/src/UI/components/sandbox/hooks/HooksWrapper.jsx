import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import NavItem from "../../routes/NavItem";
import { useTheme } from '../../../providers/ThemeProvider';

const HooksWrapper = () => {
    const { isDark } = useTheme()

    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <NavItem label="set posts" to="set-posts" color={isDark ? 'white' : 'black'} ></NavItem>
                </Toolbar>
            </AppBar>

            <Outlet />
        </>
    )
}

export default HooksWrapper;