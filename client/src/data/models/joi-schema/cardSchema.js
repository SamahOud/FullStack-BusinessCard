import Joi from 'joi';

const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

const cardSchema = {
    title: Joi.string().min(2).max(250).required(),

    subtitle: Joi.string().min(2).max(250).required(),

    description: Joi.string().min(2).max(250).required(),

    phone: Joi.string()
        .ruleset
        .pattern(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
        .rule({message: "Please enter a valid phone number"})
        .required(),

    email: Joi.string()
        .ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
        .rule({message: "Please enter a valid email"})
        .required(),

    webUrl: Joi.string()
        .ruleset.regex(urlRegex)
        .rule({message: 'card "web" mast be a valid url'}),

    imageUrl: Joi.string()
        .ruleset.regex(urlRegex)
        .rule({message: 'card.image "url" mast be a valid url'}),

    imageAlt: Joi.string().min(2).max(250).allow(""),

    state: Joi.string().allow(""),

    country: Joi.string().min(2).max(250).required(),

    city: Joi.string().min(2).max(250).required(),

    street: Joi.string().min(2).max(250).required(),

    houseNumber: Joi.number().required(),
    
    zip: Joi.number(),

    _id: Joi.string().allow(""),
};

export default cardSchema;