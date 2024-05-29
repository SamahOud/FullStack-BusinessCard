const { handleBadRequest } = require('../../utils/handleErrors');
const Card = require('../models/mongodb/Card');
const lodash = require('lodash');

const generateBizNumber = async () => {
    try {
        const random = lodash.random(1000000, 9000000);
        const card = await Card.findOne({ bizNumber: random }, { bizNumber: 1, _id: 0 });
        if (card)  return generateBizNumber(); 
        return random;
    } catch (error) {
        return handleBadRequest(`GeneratBizNumber: ${error.message}`); // return error
    }
}

module.exports = generateBizNumber;