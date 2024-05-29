import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { Box, CardContent, Container } from "@mui/material"

import useCards from "../../../core/hooks/useCards"
import CardDetails from "./CardDetails"

const CardDetailsPage = () => {
    const { id } = useParams()
    const { value: {card}, handleGetCard } = useCards()

    useEffect(() => {
        handleGetCard(id);
    }, [id])

    return (
        <Container maxWidth="lg">
            <CardContent>
                <Box mt={1}>
                    {/* <CardDetails card={card}/> */}
                    <CardDetails card={card}/>
                </Box>
            </CardContent>
        </Container>
    )
}

export default CardDetailsPage
