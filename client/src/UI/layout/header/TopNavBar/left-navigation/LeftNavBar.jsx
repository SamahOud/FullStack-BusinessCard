import { Box } from "@mui/material"

import Logo from "../logo/Logo"
import LogoIcon from "../logo/LogoIcon"
import { useUser } from "../../../../components/users/providers/UserProvider"
import NavItem from "../../../../components/routes/NavItem"
import ROUTES from "../../../../../core/routes/routesModel"

const LeftNavBar = () => {
    const { user } = useUser()
 
    return (
        <Box>
            <LogoIcon />
            <Logo />

            <Box sx={{ display: { xs: "none", md: "inline-flex" } }} >
                <NavItem color="white" label="About" to={ROUTES.ABOUT}></NavItem>
                { user && !user.isBusiness && (
                    <>
                        <NavItem color="white" label="Fav Cards" to={ROUTES.FAV_CARDS}></NavItem>
                    </>
                )}
                
                { user && user.isBusiness && (
                    <>
                        <NavItem color="white" label="Fav Cards" to={ROUTES.FAV_CARDS}></NavItem>
                        <NavItem color="white" label="My Cards" to={ROUTES.MY_CARDS}></NavItem>
                    </>
                )}
                { user && user.isAdmin && (
                    <>
                        <NavItem color="white" label="Sandbox 🧃" to={ROUTES.SANDBOX}></NavItem>
                    </>
                    
                )}
            </Box>
        </Box>
    )
}

export default LeftNavBar
