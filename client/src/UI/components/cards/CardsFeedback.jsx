import { arrayOf, bool, func, string } from "prop-types"
import { Container, Grid, Typography } from "@mui/material"

import Error from "../../pages/error-page/Error"
import Spinner from "../../pages/Spinner"
import Cards from "./Cards"
import cardType from "../../../data/types/cardType"

const CardsFeedback = ({ isPending, error, cards, onDeleteCard, onLike }) => {
    if (isPending) return <Spinner />
    if (error) return <Error errorMessage={error} />
    if (cards && !cards.length)
        return (
            <Container sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    <Typography variant="h5" color="initial"
                        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                        It seems there are no business cards to display
                    </Typography>

                    <Grid item xs={12} md={12} justifyContent="center">
                        <img src="/assets/images/error_oops1.png"
                            alt="broken robot" width="100%" />
                    </Grid>
                </Grid>
            </Container>
        );
    if (cards && !!cards.length) return <Cards cards={cards} onDeleteCard={onDeleteCard} onLike={onLike} />;
}

CardsFeedback.propTypes = {
    isPending: bool.isRequired,
    error: string,
    cards: arrayOf(cardType),
    onLike: func.isRequired
}

CardsFeedback.defaultProps = {
    onLike: async () => { },
}

export default CardsFeedback;
