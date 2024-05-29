const Joi = require("joi");

const loginValidation = user => {
    const schema = Joi.object({
        email: Joi.string()
            .ruleset.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
            .rule({ message: 'user "mail" mast be a valid mail' })
            .required(),

        password: Joi.string()
            .ruleset.regex(/((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/)
            .rule({ message: 'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-', })
            .required(),
    });
    return schema.validate(user);
}

module.exports = loginValidation;