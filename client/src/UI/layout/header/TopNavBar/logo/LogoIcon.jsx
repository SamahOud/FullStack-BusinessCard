import { Avatar } from "@mui/material"
import IconButton from '@mui/material/IconButton'
import { useUser } from "../../../../components/users/providers/UserProvider";
import ROUTES from "../../../../../core/routes/routesModel";
import NavBarLink from "../../../../components/routes/NavBarLink";

const LogoIcon = () => {
    const { user } = useUser()
    const link = user?.isAdmin ? ROUTES.CARDS : user?.isBusiness ? ROUTES.CARDS : user ? ROUTES.CARDS : ROUTES.ROOT;

    return (
        <IconButton 
            sx={{display: { xs: "inline-flex", md: "none" },
                size: "large", edge: "start", color: "inherit",}}
            >
                <NavBarLink to={link} color="white">
                    <Avatar alt='me' src='/assets/images/business-card.png'></Avatar>
                </NavBarLink>
        </IconButton>
    )
}

export default LogoIcon
