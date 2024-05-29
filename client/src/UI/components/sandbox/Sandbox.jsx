import { Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import NavItem from "../routes/NavItem";
import { useTheme } from "../../providers/ThemeProvider";

const Sandbox = () => {
    const { isDark } = useTheme()
    
    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <NavItem label="Hooks" to="hooks" color={isDark ? 'white' : 'black'}></NavItem>
                    <NavItem label="LifeCycle Hooks" to="life-cycle-hooks" color={isDark ? 'white' : 'black'}></NavItem> 
                    <NavItem label="Custom Hooks" to="custom-hooks" color={isDark ? 'white' : 'black'}></NavItem> 
                    <NavItem label="Memoization 🤔" to="memoization" color={isDark ? 'white' : 'black'}></NavItem> 
                    <NavItem label="context" to="context" color={isDark ? 'white' : 'black'}></NavItem> 
                    <NavItem label="form" to="form" color={isDark ? 'white' : 'black'}></NavItem> 
                </Toolbar>
            </AppBar>

            <Outlet />
        </>
    );
}

export default Sandbox;