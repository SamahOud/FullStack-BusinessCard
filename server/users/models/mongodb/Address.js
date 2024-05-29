const mongoose = require("mongoose");
const { DEFAULT_VALIDATION } = require("../../helpers/MongooseValidators");

const Address = new mongoose.Schema({
    state: {
        type: String,
        minLength: 2,
        maxLength: 256,
        trim: true,
        lowercase: true,
        default: "not defined",
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
})

module.exports = Address;