import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import Container from '@mui/material/Container'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'

import useCards from "../../../core/hooks/useCards"
import { useUser } from "../../../UI/components/users/providers/UserProvider"
import { useTheme } from "../../providers/ThemeProvider"
import ROUTES from "../../../core/routes/routesModel"
import PageHeader from "../about-page/PageHeader"
import CardsFeedback from "../../components/cards/CardsFeedback"
import { Box } from "@mui/material"

const MyCardsPage = () => {
    const { value:{ cards, isPending, error },  handleGetMyCards, handleDeleteCard } = useCards()
    const { user } = useUser()
    const navigate = useNavigate()
    const { isDark } = useTheme()

    useEffect(() => {
        if(!user) navigate(ROUTES.LOGIN)
        else handleGetMyCards()
    }, [user])

    const onDeleteCard = async cardId => {
        // TODO: make this functionality more efficient.
        await handleDeleteCard(cardId)
        await handleGetMyCards()
    }

    return (
       <Box minHeight={100} sx={{ padding: { xs: 1, sm: 4},}} >
            <PageHeader title='Create Your Card' subtitle='Create your business cards' />
            {" "}
            {/* { cards &&( */}
            { user.isBusiness && (
                <Fab   
                    aria-label=""
                    onClick={() => navigate(ROUTES.CREATE_CARD)}
                    sx={{position: "fixed", bottom: 75, right: 16, backgroundColor: isDark ? "#182429" : "#4D3E4C"}}
                >
                    <AddIcon  />
                </Fab>   
            )}
            
            <CardsFeedback
                isPending={isPending}
                error={error}
                cards={cards}
                onDeleteCard={onDeleteCard}
            />
        </Box>
    )
}

export default MyCardsPage
