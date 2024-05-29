import { AppBar, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavItem from '../../routes/NavItem';
import { useTheme } from '../../../providers/ThemeProvider';

const CustomHooks = () => {
    const { isDark } = useTheme()
    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <NavItem label="Custom Counter Hook" to="custom-counter" color={isDark ? 'white' : 'black'} />
                </Toolbar>
            </AppBar>

            <Outlet />
        </>
    );
}

export default CustomHooks;