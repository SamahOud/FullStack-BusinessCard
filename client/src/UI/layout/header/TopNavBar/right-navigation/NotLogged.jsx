import { Box } from "@mui/material"
import NavItem from '../../../../components/routes/NavItem'
import ROUTES from '../../../../../core/routes/routesModel'

const NotLogged = () => {
    return (
        <Box>
            <NavItem label="Sign Up" to={ROUTES.SIGNUP} color="white" />
            <NavItem label="Log In" to={ROUTES.LOGIN} color="white" />
        </Box>
    )
}

export default NotLogged
