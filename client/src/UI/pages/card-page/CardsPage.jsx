import Container from '@mui/material/Container'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { useUser } from '../../components/users/providers/UserProvider'
import useCards from '../../../core/hooks/useCards'
import ROUTES from '../../../core/routes/routesModel'
import PageHeader from '../about-page/PageHeader'
import CardsFeedback from '../../components/cards/CardsFeedback'
import { Box } from '@mui/material'

const CardsPage = () => {
    const { user } = useUser();
    const { value:{ cards, error, isPending, filteredCards }, 
        handleGetCards, handleDeleteCard, handleGetMyCards } = useCards()

    useEffect(() => {
        handleGetCards()
    }, [])

    const onDeleteCard = async cardId => {
        // TODO: make this functionality more efficient.
        await handleDeleteCard(cardId);
        await handleGetMyCards();
    }

    useEffect(() => {}, [filteredCards])
    
    // checks if the user is not exists
    if (!user) return <Navigate to={ROUTES.CARDS} />

    // checks if the user is logged in and is an admin
    if (user.isAdmin) return (
        <Box minHeight={100} sx={{ padding: { xs: 1, sm: 4}}} >
            <PageHeader title='Welcome Admin' subtitle='Here you can find business cards from all categories' />
            <CardsFeedback
                isPending={isPending}
                error={error}
                cards={filteredCards}
                onDeleteCard={onDeleteCard}
            />
        </Box>
    )
    
    // checks if the user is logged in and not a business user
    if (user && !user.isBusiness) return (
        <Box minHeight={100} sx={{ padding: { xs: 1, sm: 4}}} >
            <PageHeader title='Welcome User' subtitle='Here you can find business cards from all categories' />
            <CardsFeedback
                isPending={isPending}
                error={error}
                cards={filteredCards}
                onDeleteCard={onDeleteCard}
            />
        </Box>
    )


    // checks if the user is logged in and is a business user
    if (user && user.isBusiness) return (
        <Box minHeight={100} sx={{ padding: { xs: 1, sm: 4}}} >
            <PageHeader title='Welcome Business User' subtitle='Here you can find business cards from all categories' />
            <CardsFeedback
                isPending={isPending}
                error={error}
                cards={filteredCards}
                onDeleteCard={onDeleteCard}
            />
        </Box>
    )
}

export default CardsPage
