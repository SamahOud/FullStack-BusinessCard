import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import PageHeader from './PageHeader' 
import { useTheme } from '../../providers/ThemeProvider'

const AboutPage = () => {
    const { isDark } = useTheme()
    return (
        <>
            <Box minHeight={100} sx={{ padding: { xs: 1, sm: 4}}}  >
                <PageHeader
                    title="About Us"
                    subtitle="Explore Our Profile"
                />
                <Grid container spacing={2}>
                    <Grid item md={8} xs={12} alignSelf="center" sx={{display: {md: 'flex'}, justifyContent: "center"}}>
                        <img src="/assets/images/about_page1.png" alt="card" width="100%" />
                    </Grid>

                    <Grid item md={4} xs={12} alignSelf="center" textAlign="center" sx={{margin: {xs: 4, md: 0},color: isDark ? 'white' : 'black'}}> 
                        <Typography variant="h6" >
                            Our Business Card Management System is designed to help users manage 
                            their business cards effectively. Whether you're a professional looking 
                            to organize your contacts or a business owner wanting to 
                            streamline networking searching.
                            In this website you can build your business card with permitions,
                            Admin / User / Guest.
                            in our website you can see collection of many company.
                            We allow users to search and build and view business cards from many categories.
                            The app features asimple and intuitive user interface, making it easy for users to find,
                            the contact info they need.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default AboutPage
