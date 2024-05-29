import { Card, CardActionArea } from "@mui/material"
import { useNavigate } from "react-router-dom"

import ROUTES from "../../../../core/routes/routesModel"
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

const CardComponent = ({ card, onDeleteCard, onLike }) => {
    const navigate = useNavigate();
    
    return (
        <Card sx={{ minWidth: 310, maxWidth: 310 }} style={{ borderBottomRightRadius: 40, borderTopLeftRadius: 40 }} >
            <CardActionArea
                // navigate יעזור לנו בניתוב הגולש לדף אחר
                onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)}
            >
                <CardHead image={card.image} />
                <CardBody card={card} />
            </CardActionArea>
            
            <CardActionBar {...{onDeleteCard, card, onLike}} />
        </Card>
    )
}

export default CardComponent
