import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { changeLikeStatus, createCard, deleteCard, getCard, getCards, getMyCards, updateCard } from "../services/cardApiService";
import useAxios from "../hooks/useAxios";
import { useSnackbar } from "../../UI/providers/SnackbarProvider";
import { normalizeCard } from "../helpers/normalization/normalizeCard";
import ROUTES from "../routes/routesModel";
import { useUser } from "../../UI/components/users/providers/UserProvider";

const useCards = () => {
    const snack = useSnackbar();
    const navigate = useNavigate();

    const [query, setQuery] = useState("");
    const [filteredCards, setFilteredCards] = useState(null);
    const [searchParams] = useSearchParams();

    const [cards, setCards] = useState(null);
    const [card, setCard] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    const { user } = useUser();

    useEffect(() => {
        // בכל פעם שיש לי נקישה qמעדכן את ה 
        setQuery(searchParams.get("q") || "");
    }, [searchParams]);

    useEffect(() => {
        // cards אם יש 
        if (cards) {
            const filtered = cards.filter(card =>
                card.title.includes(query) ||
                String(card.bizNumber).includes(query)
            )
            setFilteredCards(filtered);
        }
        // query => שמשתנה כל פעם שאני מקיש על 
        // setQuery(searchParams.get("q") || ""); 
    }, [query, cards]);

    const requestStatus = (card, cards, isPending, error) => {
        setCard(card);
        setCards(cards);
        setPending(isPending);
        setError(error);
    }
    useAxios();

    // ******** Handle Get Cards ********
    const handleGetCards = useCallback(async () => {
        try {
            setPending(true);
            const cards = await getCards();
            snack("success", "success")
            requestStatus(null, cards, false, null);
        } catch (error) {
            snack("error", error)
            requestStatus(null, null, false, error);
        }
    }, [])

    // ******** Handle Get Card ********
    const handleGetCard = useCallback(async (cardFromClient) => {
        try {
            setPending(true);
            const card = await getCard(cardFromClient);
            requestStatus(card, null, false, null);
            return card;
        } catch (error) {
            requestStatus(null, null, false, error);
        }
    }, [])

    // ******** Handle Get My Cards ********
    const handleGetMyCards = useCallback(async () => {
        try {

            setPending(true);
            const cards = await getMyCards();
            snack("success", "success")
            // requestStatus(card, cards, false, null);
            requestStatus(null, cards, false, null);
        } catch (error) {
            snack("error", error)
            requestStatus(null, null, false, error);
        }
    }, [snack])

    // ******** Handle Delete Card ********
    const handleDeleteCard = useCallback(async (cardId) => {
        try {
            setPending(true);
            await deleteCard(cardId);
            snack("success", "The business card has been successfully deleted")
        } catch (error) {
            snack("error", error)
            // Calls the requestStatus function with the error parameter to indicate a failed request.
            requestStatus(null, null, false, error);
        }
    }, [snack])

    // ******** Handle Create Card ********
    const handleCreateCard = useCallback(async (cardFromClient) => {
        try {
            setPending(true);
            const normalizedCard = normalizeCard(cardFromClient)
            const card = await createCard(normalizedCard);
            requestStatus(card, null, false, null);
            snack("success", "The business card has been successfully created");
            navigate(ROUTES.MY_CARDS);
        } catch (error) {
            requestStatus(null, null, false, error);
        }
    }, [navigate, snack]);

    // ******** Handle Update Card ********
    const handleUpdateCard = useCallback(async (cardId, cardFromClient) => {
        try {
            setPending(true);
            const card = await updateCard(cardId, cardFromClient);
            requestStatus(card, null, false, null);
            navigate(ROUTES.MY_CARDS);
            snack("success", "The business card has been successfully updated");
        } catch (error) {
            requestStatus(null, null, false, error);
        }
    }, [navigate, snack]);

    // ******** Handle Like Card ********
    const handleLikeCard = useCallback(async (cardId) => {
        try {
            setPending(true);
            const card = await changeLikeStatus(cardId);
            requestStatus(card, cards, false, null);
        } catch (error) {
            requestStatus(null, null, false, error);
        }
    }, [cards]);

    // ******** Handle Get Favorite Cards ********
    const handleGetFavCards = useCallback(async () => {
        try {
            setPending(true);
            // this method should call the get all cards method from the cards api service
            const cards = await getCards();
            // after all cards are fetched, filter them so only the relevant cards with remain
            // !! => אם מצאתי משהו מחרוזת 
            // OR false => undefained card.likes.find(id => id === user._id)
            const favCards = cards.filter(card => !!card.likes.find(id => id === user._id));
            requestStatus(null, favCards, false, null);
        } catch (error) {
            requestStatus(null, null, false, error);
        }
    }, []);

    const value = useMemo(() => ({
        cards, card, isPending, error, filteredCards
    }), [cards, card, isPending, error, filteredCards]);

    return {
        value,
        handleGetCards,
        handleGetCard,
        handleGetMyCards,
        handleDeleteCard,
        handleCreateCard,
        handleUpdateCard,
        handleLikeCard,
        handleGetFavCards
    };
}

export default useCards;