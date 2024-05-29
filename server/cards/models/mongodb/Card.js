const mongoose = require("mongoose");
const Address = require("./Address");
const Image = require("./Image");
const { DEFAULT_VALIDATION, URL } = require("../../helpers/mongooseValidators");

const cardSchema = new mongoose.Schema({
    title: DEFAULT_VALIDATION,
    subtitle: DEFAULT_VALIDATION,
    description: {
        ...DEFAULT_VALIDATION,
        maxLength: 1024,
    },
    phone: {
        type: String,
        required: true,
        match: RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/),
    },
    email: {
        type: String,
        required: true,
        match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
        lowercase: true,
        trim: true,
        unique: false,
    },
    web: URL,
    image: Image,
    address: Address,
    bizNumber: {
        type: Number,
        minLength: 7,
        maxLength: 7,
        required: true,
        trim: true,
    },
    likes: [String],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
});

const Card = mongoose.model("card", cardSchema);

module.exports = Card;