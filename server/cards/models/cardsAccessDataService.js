const { handleBadRequest } = require("../../utils/handleErrors");
const Card = require("./mongodb/Card");

const DB = process.env.DB || "MONGODB";

// Get cards in the database
const getCards = async () => {
    if (DB === "MONGODB") {
        try {
            const cards = await Card.find();
            return Promise.resolve(cards); // return the fetched cards directly
        } catch (error) {
            error.status = 404;
            return handleBadRequest("Mongoose getCards:", error);
        }
    }
    return Promise.resolve("Get cards not in mongodb!");
}

// Get my cards
const getMyCards = async (userId) => {
    if (DB === "MONGODB") {
        try {
            const cards = await Card.find({ user_id: userId });
            if (!cards) throw new Error('Could not find this card in the database');
            return Promise.resolve(cards);
        } catch (error) {
            error.status = 404;
            return handleBadRequest("Mongoose getMyCards:", error);
        }
    }
    return Promise.resolve("Get my cards not in mongodb!");
}

// Get a specific card in the database using its id
const getCard = async (cardId) => {
    if (DB === "MONGODB") {
        try {
            const card = await Card.findById(cardId);
            if (!card) throw new Error(`Could not find this card with ID ${cardId} in the database`);
            return Promise.resolve(card);
        } catch (error) {
            error.status = 404;
            return handleBadRequest("Mongoose getCard:", error);
        }
    }
    return Promise.resolve("Get card not in mongodb!");
}

// Create a new card in the database
const createCard = async (normalizedCard) => {
    if (DB === "MONGODB") {
        try {
            let card = new Card(normalizedCard);
            card = await card.save();
            return Promise.resolve(card);
        } catch (error) {
            error.status = 400;
            return handleBadRequest("Mongoose createCard:", error);
        }
    }
    return Promise.resolve("Create Card not in mongodb!");
}

// Update an existing card in the database with a given card object
const updateCard = async (cardId, normalizedCard) => {
    if (DB === "MONGODB") {
        try {
            let card = await Card.findByIdAndUpdate(cardId, normalizedCard, { new: true }); // returns updated card info
            // look for the user by username and return it as a promise
            if (!card) {
                throw new Error(`Could not update this card because a card with this ID ${cardId} cannot be found in the database`);
            }
            return Promise.resolve(card);
        } catch (error) {
            error.status = 400;
            return handleBadRequest("Mongoose updateCard:", error);
        }
    }
    return Promise.resolve("Update Card not in mongodb!");
}

// Like a card 
const likeCard = async (cardId, userId) => {
    if (DB === "MONGODB") {
        try {
            const card = await Card.findById(cardId);
            if (!card) {
                throw new Error(`Could not change card likes because a card with this ID ${cardId} cannot be found in the database`);
            }

            const cardLikes = card.likes.find(id => id === userId);
            if (!cardLikes) {
                card.likes.push(userId);
                const cardFromDB = await card.save();
                return Promise.resolve(cardFromDB);
            }

            const cardFiltered = card.likes.filter(id => id !== userId);
            card.likes = cardFiltered;
            const cardFromDB = await card.save();
            return Promise.resolve(cardFromDB);
        } catch (error) {
            error.status = 400;
            return handleBadRequest("Mongoose likeCard:", error);
        }
    }
    return Promise.resolve("Like card not in mongodb!");
}

// Change business number
const changeBizNumber = async (cardId, bizNumber) => {
    try {
        const card = await Card.findById(cardId);
        if (!card)
            throw new Error("A card with this ID cannot be found in the database");

        card.bizNumber = bizNumber;
        const newCard = await card.save();
        return Promise.resolve(newCard);
    } catch (error) {
        return handleBadRequest("Mongoose changeBizNumber:", error);
    }
};

// Check if business number exists
const isBizNumberExists = async (bizNumber) => {
    try {
        const card = await Card.findOne({ bizNumber }, { bizNumber: 1, _id: 0 });
        if (card) {
            throw new Error(`Business number ${bizNumber} already exists in the database`);
        }
        return bizNumber;
    } catch (error) {
        return handleBadRequest("Mongoose isBizNumberExists:", error);
    }
};

// Delete a card from the database by its id
const deleteCard = async (cardId, user) => {
    if (DB === "MONGODB") {
        try {
            const card = await Card.findById(cardId);
            if (!card) {
                throw new Error(`Could not delete this card because a card with this ID ${cardId} cannot be found in the database`);
            }

            if (card.user_id != user._id && !user.isAdmin) {
                throw new Error("Authorization Error: Only the user who created the business card or admin can delete this card");
            }
            const cardFromDB = await Card.findByIdAndDelete(cardId);
            return Promise.resolve(cardFromDB);
        } catch (error) {
            error.status = 400;
            return handleBadRequest("Mongoose deleteCard:", error);
        }
    }
    return Promise.resolve("Deleted card not in mongodb!");
}

// async function deleteDuplicateCardById(duplicateId) {
//     try {
//         // Find the document with the duplicate _id
//         const duplicateCard = await Card.findOne({ _id: duplicateId });

//         if (duplicateCard) {
//             // If the document exists, delete it
//             await Card.deleteOne({ _id: duplicateId });
//             console.log('Duplicate card deleted successfully');
//         } else {
//             console.log('Duplicate card not found');
//         }
//     } catch (error) {
//         console.error('Error deleting duplicate card:', error);
//     }
// }

exports.getCards = getCards;
exports.getMyCards = getMyCards;
exports.getCard = getCard;
exports.createCard = createCard;
exports.updateCard = updateCard;
exports.likeCard = likeCard;
exports.changeBizNumber = changeBizNumber;
exports.isBizNumberExists = isBizNumberExists;
exports.deleteCard = deleteCard;
// exports.deleteDuplicateCardById = deleteDuplicateCardById;