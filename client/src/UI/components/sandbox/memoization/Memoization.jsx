import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../../routes/NavItem";
import React from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "../../../providers/ThemeProvider";

const Memoization = () => {
    const { isDark } = useTheme();

    const memoized = (func) => {
        let cache = {
            // 1: {
            //     1: 2
            // },
            // 2: {
            //     1: 3,
            //     2: 4
            // }
        };
      
        return (...args) => {
            const [a, b ] = args;
            const str = JSON.stringify(args);
            if (cache[str]) {
                return cache[str];
            } else {
                console.count("calculating");
                const result = func(a, b);
                cache = {
                    ...cache,
                    [str]: result
                }
                return result;
            }
        }
    }

    const memoizedCalculation = memoized((a, b) => a + b);
    console.log(memoizedCalculation(1, 2));
    console.log(memoizedCalculation(2, 1));

    return (
        <>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <NavItem label="use callback" to="use-callback" color={isDark ? 'white' : 'black'} ></NavItem>
                    <NavItem label="use memo" to="use-memo" color={isDark ? 'white' : 'black'} ></NavItem>
                </Toolbar>
            </AppBar>

            <Outlet />
        </>
    )
};

export default Memoization;