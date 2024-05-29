import { useCallback, useEffect } from "react"
import { Box } from "@mui/material"

import useCards from "../../core/hooks/useCards"
import PageHeader from './about-page/PageHeader'
import CardsFeedback from '../components/cards/CardsFeedback'

const FavCardsPage = () => {
    const { value, ...rest } = useCards()
    const {cards, isPending, error} = value;
    // methods for getting the fav cards and the handle delete cards from the useCards hook
    const { handleDeleteCard, handleGetFavCards } = rest

    // fetches the favorite cards on mount and the empty [] that the effect runs only once
    useEffect(() => {
        handleGetFavCards();
    }, []);

    const onDeleteCard = useCallback( async (cardId) => {
        await handleDeleteCard(cardId);
        await handleGetFavCards();
    }, []);

    const changeLikeStatus = useCallback( async () => {
        await handleGetFavCards();
    })

    return (
        <Box minHeight={100} sx={{ padding: { xs: 1, sm: 4},}} >
            <PageHeader
                title="Saved Favorites"
                subtitle="Explore and organize your most-favorite cards."
            />

            <CardsFeedback
                isPending={isPending}
                error={error}
                cards={cards}
                onDeleteCard={onDeleteCard}
                onLike={changeLikeStatus}
            />
        </Box>
    )
}

export default FavCardsPage
