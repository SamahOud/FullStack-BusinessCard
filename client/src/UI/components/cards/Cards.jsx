import { Container, Stack, Typography } from "@mui/material"
import CardComponent from "./card/Card"

const Cards = ({ cards, onDeleteCard, onLike }) => {
    const methods = { onDeleteCard, onLike };

    if (!cards.length) {
        return <Typography variant="h5">No cards found</Typography>;
    }
         
    return (
        <Container sx={{mt: 4}}>
            <Stack spacing={1} gap={2} paddingBottom="27px"
                direction="row" flexWrap="wrap" justifyContent="center">
                { 
                    cards.map((card, i) => (<CardComponent {...methods} card={card} key={i}></CardComponent>))
                }
            </Stack>
        </Container>
    )
}

export default Cards
