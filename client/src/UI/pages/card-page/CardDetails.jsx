import { Box, Divider, Grid, Paper, Stack, Typography } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import BusinessIcon from '@mui/icons-material/Business'
import SubtitlesIcon from '@mui/icons-material/Subtitles'
import DescriptionIcon from '@mui/icons-material/Description'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import HouseIcon from '@mui/icons-material/House'
import CallIcon from "@mui/icons-material/Call"
import MailIcon from "@mui/icons-material/Mail"

import { useTheme } from "../../providers/ThemeProvider"

const CardDetails = ({ card }) => {
    const styles = {
        display: "flex",
        alignItems: "center",
        padding: '10px',

        flex: {
            display: "flex",
            flexDirection: 'column'
        },
        text: {
            color: "#ffffff",
            fontSize: "20px",
            fontWeight: "bold",
        },
        width: {
            xs: "100%", sm: "50%", md: 250
        },
        icon: {
            color: "#ffffff",
            fontSize: "30px",
            marginRight: '10px'
        }
    }
    const { isDark } = useTheme()

    return (
        <Box minHeight={100}>
            <Stack >
                <Paper elevation={5} sx={{ backgroundColor: isDark ? "#182429" : "#61c0c2"}}>
                    <Box style={{ ...styles }} >
                        <InfoIcon style={{ ...styles.icon }} sx={{ marginRight: '10px' }} /> 
                        <Typography variant="h5" style={{ ...styles.text }} >BUSINESS INFORMATION</Typography>
                    </Box>

                    <Box style={{ ...styles }} >
                        <Divider orientation="vertical" flexItem sx={{ backgroundColor: "white", marginRight: '25px', marginLeft: '15px' }} />
                        <Typography gutterBottom variant="h6" component="div" sx={{ color: "white" }}>
                            Here you can find all the information about the business you are looking for.   
                        </Typography>
                    </Box>
                </Paper>
            </Stack>

            <Grid mt={5} sx={{ display: 'flex', gap: "15px", flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'space-between', minWidth: "100%", height: "auto"}}>
                <Grid item xs={12} lg={6} sx={{ height: "auto"}} >
                    <Stack sx={{ maxWidth: "100%", display: 'flex', gap: '20px', flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Paper style={{ ...styles }} elevation={3} 
                            sx={{ p: 2, width: {...styles.width}, marginBottom: {sm: '20px'},backgroundColor: isDark ? "#182429" : "#61c0c2" }} >
                            <BusinessIcon style={{ ...styles.icon }} /> 
                            
                            <Box style={{ ...styles.flex }}>                       
                                <Typography style={{ ...styles.text }}>Company Name:</Typography>
                                <Typography gutterBottom variant="body1" component="div" sx={{ color: "#000000" }}>
                                    { card?.title }
                                </Typography>
                            </Box>
                        </Paper>

                        <Paper style={{ ...styles }} elevation={3} 
                            sx={{ p: 2, width: {...styles.width}, marginBottom: "20px",backgroundColor: isDark ? "#182429" : "#61c0c2" }} >
                            <SubtitlesIcon style={{ ...styles.icon }} /> 
                            
                            <Box style={{ ...styles.flex }}>                       
                                <Typography style={{ ...styles.text }}>Subtitle:</Typography>
                                <Typography gutterBottom variant="body1" component="div" sx={{ color: "#000000" }}>
                                    { card?.subtitle }
                                </Typography>
                            </Box>
                        </Paper>
                    </Stack>

                    <Stack sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Paper style={{ ...styles }} elevation={3}
                            sx={{ p: 2, width: {...styles.width}, marginBottom: { sm: '20px' },backgroundColor: isDark ? "#182429" : "#61c0c2" }} >
                            <HouseIcon style={{ ...styles.icon }}/> 
                            
                            <Box style={{ ...styles.flex }}>                       
                                <Typography style={{ ...styles.text }}>Address:</Typography>
                                <Typography gutterBottom variant="body1" component="div" sx={{ color: "#000000" }}>
                                    { `${card?.address?.houseNumber}, ${card?.address?.street}, ${card?.address?.city}`}
                                </Typography>
                            </Box>
                        </Paper>

                        <Paper style={{ ...styles }} elevation={3} 
                            sx={{ p: 2, width: {...styles.width}, marginBottom: "20px",backgroundColor: isDark ? "#182429" : "#61c0c2" }} >
                            <MailIcon style={{ ...styles.icon }} /> 
                            
                            <Box style={{ ...styles.flex }}>                       
                                <Typography style={{ ...styles.text }}>Postal Code:</Typography>
                                <Typography gutterBottom variant="body1" component="div" sx={{ color: "#000000" }}>
                                    { card?.address?.zip }
                                </Typography>
                            </Box>
                        </Paper>
                    </Stack>

                    <Stack sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Paper style={{ ...styles }} elevation={3} 
                            sx={{ p: 2, width: {...styles.width}, marginBottom: { sm: '20px',backgroundColor: isDark ? "#182429" : "#61c0c2" } }} >
                            <CallIcon style={{ ...styles.icon }} /> 
                            
                            <Box style={{ ...styles.flex }}>                       
                                <Typography style={{ ...styles.text }}>Phone:</Typography>
                                <Typography gutterBottom variant="body1" component="div" sx={{ color: "#000000" }}>
                                    { card?.phone }
                                </Typography>
                            </Box>
                        </Paper>

                        <Paper style={{ ...styles }} elevation={3} 
                            sx={{ p: 2, width: {...styles.width}, marginBottom: "20px",backgroundColor: isDark ? "#182429" : "#61c0c2" }} >
                            <AlternateEmailIcon style={{ ...styles.icon }} /> 
                            
                            <Box style={{ ...styles.flex }}>                       
                                <Typography style={{ ...styles.text }}>Email:</Typography>
                                <Typography gutterBottom variant="body1" component="div" sx={{ color: "#000000" }}>
                                    { card?.email }
                                </Typography>
                            </Box>
                        </Paper>
                    </Stack>

                    <Stack sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Paper style={{ ...styles }} sx={{ p: 2, width:{xs: "100%", sm: "100%", md: "518px"},backgroundColor: isDark ? "#182429" : "#61c0c2" }} elevation={3}>
                            <DescriptionIcon style={{ ...styles.icon }} /> 

                            <Box style={{ ...styles.flex }}>                       
                                <Typography style={{ ...styles.text }}>Description:</Typography>
                                <Typography gutterBottom variant="body1" component="div" sx={{ color: "#000000" }}>
                                    { card?.description }
                                </Typography>
                            </Box>
                        </Paper>
                    </Stack>
                </Grid>

                <Grid item sx={{ display: 'flex', justifyContent: 'center', flexDirection: { sm: 'column', md: 'column'} }}  >
                    <Stack mt={0} spacing={2} height='auto'>  
                        <Paper sx={{ p: 2, background: 'none' }} >
                           <img className="img" src={card?.image?.url} alt="Card" style={{ width: '100%', height: '400px', display: 'block', margin: '0 auto' }}/>
                        </Paper>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CardDetails
