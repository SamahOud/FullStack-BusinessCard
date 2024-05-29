const mongoose = require("mongoose");
const { DEFAULT_VALIDATION } = require("../../helpers/mongooseValidators");

const Address = new mongoose.Schema({
    state: {
        type: String,
        maxLength: 256,
        trim: true,
    },
    country: DEFAULT_VALIDATION,
    city: DEFAULT_VALIDATION,
    street: DEFAULT_VALIDATION,
    houseNumber: {
        type: Number,
        required: true,
        trim: true,
        minLength: 1,
    },
    zip: {
        type: Number,
        trim: true,
        minLength: 4,
        default: 0,
    },
});

module.exports = Address;