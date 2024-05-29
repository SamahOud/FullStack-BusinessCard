const jwt = require('jsonwebtoken');
const config = require('config');
const key = config.get('JWT_KEY');

// generateAuthToken mean create token for user after login or signup 
const generateAuthToken = user => {
    const { _id, isAdmin, isBusiness } = user;
    const token = jwt.sign({ _id, isAdmin, isBusiness }, key)
    return token;
}

// verifyAuthToken mean verify token for user when they make request to api
const verifyAuthToken = token => {
    try {
        const userData = jwt.verify(token, key)
        return userData;
    } catch (error) {
        return null;
    }
}

exports.generateAuthToken = generateAuthToken
exports.verifyAuthToken = verifyAuthToken