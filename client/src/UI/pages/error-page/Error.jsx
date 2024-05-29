import {Container, Grid, Typography} from '@mui/material'
import { string } from 'prop-types'

const Error = ({ errorMessage }) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" color="initial">
                        Oops... something went wrong: {errorMessage}
                    </Typography>
                </Grid>

                <Grid item xs={12} md={4} justifyContent="center">
                <img
                    width="100%"
                    src="/assets/images/broken-robot-error.png"
                    alt="broken robot"
                />
                </Grid>
            </Grid>
        </Container>
    )
}

Error.propTypes = {
    errorMessage: string.isRequired,
}

export default Error
