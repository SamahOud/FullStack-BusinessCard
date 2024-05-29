import { Navigate } from "react-router-dom"

import useCards from "../../core/hooks/useCards"
import { useUser } from "../components/users/providers/UserProvider"
import useForm from "../../core/hooks/useForms"
import initialCardForm from "../../core/helpers/initialForms/initialCardForm"
import cardSchema from "../../data/models/joi-schema/cardSchema"
import ROUTES from "../../core/routes/routesModel"
import CardForm from "../components/cards/CardForm"
import { Box } from "@mui/material"
import PageHeader from "./about-page/PageHeader"

const CreateCardPage = () => {
    const { handleCreateCard } = useCards();
    const { user } = useUser();
    const { value, ...rest } = useForm(initialCardForm, cardSchema, handleCreateCard);

    if (!user || !user.isBusiness) return <Navigate to={ROUTES.CARDS} />;

    return (
        <Box minHeight={100} sx={{ padding: { xs: 1, sm: 4}}} >
            <PageHeader title='Create Your Card' subtitle='Craft personalized cards that leave a lasting impression' />
            <CardForm
                title="create card"
                data={value.data}
                onSubmit={rest.onSubmit}
                onReset={rest.handleReset}
                errors={value.errors}
                onFormChange={rest.validateForm}
                onInputChange={rest.handleChange}
                >
            </CardForm>
        </Box>
    )
}

export default CreateCardPage
