import { AppBar, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavItem from '../../routes/NavItem';
import { useTheme } from '../../../providers/ThemeProvider';

const LifeCycleHooks = () => {
    const { isDark } = useTheme()
    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <NavItem label="useState Cycle" to="use-state" color={isDark ? 'white' : 'black'} />
                    <NavItem label="UseEffect Did Mount" to="useEffect-did-mount" color={isDark ? 'white' : 'black'} />
                    <NavItem label="UseEffect Did Update" to="useEffect-did-update" color={isDark ? 'white' : 'black'} />
                    <NavItem label="UseEffect Will Unmount" to="useEffect-will-unmount" color={isDark ? 'white' : 'black'} />
                    <NavItem label="UseEffect Did Update - no deps" to="useEffect-did-update-no-deps" color={isDark ? 'white' : 'black'} />
                </Toolbar>
            </AppBar>

            <Outlet />
        </>
    );
}

export default LifeCycleHooks;