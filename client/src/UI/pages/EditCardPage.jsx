import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import initialCardForm from "../../core/helpers/initialForms/initialCardForm"
import useCards from "../../core/hooks/useCards"
import useForm from "../../core/hooks/useForms"
import cardSchema from "../../data/models/joi-schema/cardSchema"
import { useUser } from "../components/users/providers/UserProvider"
import ROUTES from "../../core/routes/routesModel"
import { normalizeCard } from "../../core/helpers/normalization/normalizeCard"
import { mapCardToModel } from "../../core/helpers/normalization//mapCardToModel"
import CardForm from "../components/cards/CardForm"
import { Box } from "@mui/material"
import PageHeader from "./about-page/PageHeader"

const EditCardPage = () => {
    const [initialForm, setInitForm] = useState(initialCardForm)
    const navigate = useNavigate()
    const { id: cardID } = useParams()
    const { user } = useUser()

    const { handleUpdateCard, handleGetCard, value: { card }, } = useCards()

    const { value, ...rest } = useForm(initialCardForm, cardSchema, () => {
        handleUpdateCard(cardID, {
            ...normalizeCard(value.data),
            bizNumber: card.bizNumber,
            user_id: card.user_id,
        })
    })

    useEffect(() => {
        handleGetCard(cardID).then((data) => {
            if (data && data.user_id && user._id !== data.user_id) {
                navigate(ROUTES.CARDS);
            }
            const modeledCard = mapCardToModel(data)
            setInitForm(modeledCard)
            rest.setData(modeledCard)
        })
    }, [cardID])

    return (
        <Box minHeight={100} sx={{ padding: { xs: 1, sm: 4 } }} >
            <PageHeader title='Edit Card' subtitle='Refine and customize your card details' />
            <CardForm
                title="update card"
                data={value.data}
                onSubmit={rest.onSubmit}
                onReset={() => rest.setData(initialForm)}
                errors={value.errors}
                onFormChange={rest.validateForm}
                onInputChange={rest.handleChange}
            ></CardForm>
        </Box>
    )
}

export default EditCardPage
