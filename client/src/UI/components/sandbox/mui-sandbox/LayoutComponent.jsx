import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

const LayoutComponent = () => {
    return (
        <Container sx={{ mt: 2, p: 3 }}>
            <Grid container spacing={1} justifyContent='flex-start' alignItems='flex-start' sx={{height: 250}}>
                <Grid item xs={12} md={6} lg={4} >
                    <Box style={{ backgroundColor: 'red', height: 50, width: '100%' }}></Box>
                </Grid>

                <Grid item xs={12} md={6} lg={4} >
                    <Box style={{ backgroundColor: 'blue', height: 50, width: '100%' }}></Box>
                </Grid>

                <Grid item xs={12} md={6} lg={4} >
                    <Box style={{ backgroundColor: 'green', height: 50, width: '100%' }}></Box>
                </Grid>

                <Grid item xs={12} md={6} lg={4} >
                    <Box style={{ backgroundColor: 'yellow', height: 50, width: '100%' }}></Box>
                </Grid>

                <Grid item xs={12} md={6} lg={4} >
                    <Box style={{ backgroundColor: 'purple', height: 50, width: '100%' }}></Box>
                </Grid>

                <Grid item xs={12} md={6} lg={4} >
                    <Box style={{ backgroundColor: 'orange', height: 50, width: '100%' }}></Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LayoutComponent