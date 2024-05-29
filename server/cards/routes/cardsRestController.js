const express = require('express');
const router = express.Router();
const { handleError } = require("../../utils/handleErrors");
const { getCards, getMyCards, getCard, createCard, updateCard, likeCard, deleteCard, changeBizNumber, isBizNumberExists, } = require("../models/cardsAccessDataService");
const normalizeCard = require("../helpers/normalizeCard");
const validateCard = require("../validations/cardValidationService");
const { auth } = require('../../auth/authService');

// GET /cards - Get all data from the database
router.get('/', async (req, res) => {
    try {
        const cards = await getCards();
        return res.send(cards);
    } catch (error) {
        // 500 => error in the server
        return handleError(res, error.status || 500, error.message);
    }
});

// GET /cards/my-cards - Get my cards by userID
router.get('/my-cards', auth, async (req, res) => {
    try {
        const userId = req.user._id;
        const card = await getMyCards(userId);
        return res.send(card);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
})

// GET /cards/:id - Get a specific card by its ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const card = await getCard(id);
        return res.send(card);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

// POST /cards - Create a new card to the database
router.post('/', auth, async (req, res) => {
    try {
        let card = req.body;
        const user = req.user;

        if (!user.isBusiness)
            return handleError(res, 403, "Authentication Error: Unauthorize user");

        const { error } = validateCard(card);
        if (error)
            return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

        card = await normalizeCard(card, user._id);
        card = await createCard(card);
        return res.status(201).send(card);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

// PUT /cards/:id - Update an existing card in the database
router.put("/:id", auth, async (req, res) => {
    try {
        let card = req.body;
        const cardId = req.params.id;
        const userId = req.user._id;
        const isAdmin = req.user.isAdmin;
        
        const { error } = validateCard(card);
        if (error)
            return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

        const cardFromDb = await getCard(cardId);
        if (userId != cardFromDb.user_id && !isAdmin) {
            const message = "Authorization Error: Only the user who created the business card or admin can update its details";
            return handleError(res, 403, message);
        }
        
        card = await normalizeCard(card);
        let resCard = await updateCard(cardId, card);
        return res.send(resCard);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

// PATCH /cards/:id - Like a card
router.patch('/:id', auth, async (req, res) => {
    try {
        const cardId = req.params.id;
        const userId = req.user._id;

        const card = await likeCard(cardId, userId);
        return res.send(card);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

// PATCH /cards/biz-number/:id - Change business number
router.patch("/biz-number/:id", auth, async (req, res) => {
    try {
        const cardId = req.params.id;
        const user = req.user;
        const { bizNumber } = req.body;
    
        if (!user.isAdmin)
            throw new Error("Authorization Error: you must be an admin type user to change this business number");  
      
        await isBizNumberExists(bizNumber);
        const card = await changeBizNumber(cardId, bizNumber);
        return res.send(card);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

// DELETE /cards/:id - Delete a specific card by its ID
router.delete('/:id', auth, async (req, res) => {
    try {
        const cardId = req.params.id;
        const user = req.user;

        const card = await deleteCard(cardId, user);
        return res.send(card);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

module.exports = router;
