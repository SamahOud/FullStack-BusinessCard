import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, BottomNavigation, BottomNavigationAction, Grid, Typography } from "@mui/material"
import InfoIcon from "@mui/icons-material/Info"
import FavoriteIcon from "@mui/icons-material/Favorite"
import PortraitIcon from "@mui/icons-material/Portrait"

import ROUTES from "../../../core/routes/routesModel"
import { useUser } from "../../components/users/providers/UserProvider"
import { useTheme } from "../../providers/ThemeProvider"

const Footer = () => {
    const [value, setValue] = useState(0)
    const navigate = useNavigate()
    const navigateTo = (to) => navigate(to)
    const { user } = useUser()
    const { isDark } = useTheme()

    return (
        <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                sx={{ backgroundColor: isDark ? '#182429' : '#4D3E4C' }}
                value={value}
                onChange={(event, newValue) => { setValue(newValue); }}
                showLabels
            >
                <BottomNavigationAction
                    sx={{ color: 'white' }}
                    onClick={() => navigateTo(ROUTES.ABOUT)}
                    label="About"
                    icon={<InfoIcon />}
                />
                {user && (
                    <BottomNavigationAction
                        sx={{ color: 'white' }}
                        onClick={() => navigateTo(ROUTES.FAV_CARDS)}
                        label="Favorites"
                        icon={<FavoriteIcon />}
                    />
                )}
                {user && user.isBusiness && (
                    <BottomNavigationAction
                        sx={{ color: 'white' }}
                        onClick={() => navigateTo(ROUTES.MY_CARDS)}
                        label="My Cards"
                        icon={<PortraitIcon />}
                    />
                )}
                {user && !user.isBusiness && user.isAdmin && (
                    <BottomNavigationAction
                        sx={{ color: 'white' }}
                        onClick={() => navigateTo(ROUTES.MY_CARDS)}
                        label="My Cards"
                        icon={<PortraitIcon />}
                    />
                )}
            </BottomNavigation>

            <Grid container justifyContent="space-between" alignItems="center"
                sx={{ backgroundColor: isDark ? '#182429' : '#4D3E4C' }}>
               
                <Grid item xs={12} sm={4} textAlign={{ xs: 'center', sm: 'left' }} marginBottom={1}>
                    <Typography variant="body2" color="white" sx={{marginLeft: "5px"}}>
                        © 2024 Business Card. All rights reserved.
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={4} textAlign={{ xs: 'center', sm: 'right' }} marginBottom={1}>
                    <Typography variant="body2" color="white" sx={{marginRight: "5px"}}>
                        Contact us: <a href="mailto:contact@businesscard.com">contact@businesscard.com</a>
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Footer
