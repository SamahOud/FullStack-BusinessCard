import { Typography } from "@mui/material"
import ROUTES from "../../../../../core/routes/routesModel"
import NavBarLink from "../../../../components/routes/NavBarLink"
import { useUser } from "../../../../components/users/providers/UserProvider"

const Logo = () => {
    const { user } = useUser()
    const link = user?.isAdmin ? ROUTES.CARDS : user?.isBusiness ? ROUTES.CARDS : user ? ROUTES.CARDS : ROUTES.ROOT;

    return (
        <NavBarLink to={link} color="white">
            <Typography
                variant="h4"
                sx={{ display: { xs: "none", md: "inline-flex" },
                    marginRight: 2, fontFamily: "fantasy", color: "white"}}
                >
                BCard
            </Typography>
        </NavBarLink>
    )
}

export default Logo
