const validateCardWithJoi = require('./joi/validateCardWithJoi');

const validator = undefined || "Joi";

const validateCard = card => {
    if (validator === "Joi") return validateCardWithJoi(card);
}

module.exports = validateCard;