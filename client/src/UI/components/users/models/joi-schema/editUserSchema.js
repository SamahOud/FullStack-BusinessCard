import Joi from 'joi';

const editUserSchema = {
    first: Joi.string().min(2).max(250).required(),

    last: Joi.string().min(2).max(250).required(),

    middle: Joi.string().min(2).max(250).allow(''),

    phone: Joi.string()
        .ruleset
        .pattern(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
        .rule({
            message: "Please enter a valid phone number"
        })
        .required(),

    url: Joi.string()
        .ruleset.regex(
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
        )
        .rule({
            message: "user image must be a valid url"
        })
        .allow(""),
        
    alt: Joi.string().min(2).max(256).allow(""),

    state: Joi.string().allow(""),

    country: Joi.string().min(2).max(256).required(),

    city: Joi.string().min(2).max(256).required(),

    street: Joi.string().min(2).max(256).required(),

    houseNumber: Joi.number().required(),

    zip: Joi.number(),
}

export default editUserSchema;