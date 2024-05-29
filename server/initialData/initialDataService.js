const chalk = require('chalk');
const { createCard } = require('../cards/models/cardsAccessDataService');
const data = require('./initialData.json');
const { registerUser } = require('../users/models/usersAccessDataService');
const normalizeUser = require('../users/helpers/normalizeUser');
const normalizeCard = require('../cards/helpers/normalizeCard');
const { generateUserPassword } = require('../users/helpers/bcrypt');
const User = require('../users/models/mongodb/User');

// const generateInitialDataCards = async () => {
    
const generateInitialDataCards = async (userId) => {
   const { cards } = data;
    cards.forEach(async card => {
        try {
            // const userId = "6376274068d78742d84f31d2";
            card = await normalizeCard(card, userId);
            await createCard(card);
            return;
        } catch (error) {
            console.log(chalk.redBright(error.message));
        }
    })
}

const generateInitialDataUsers = async () => {
   const { users } = data;
    users.forEach(async user => {
        try {
            user  = await normalizeUser(user);
            user.password = generateUserPassword(user.password);
            await registerUser(user);
            return;
        } catch (error) {
            return console.log(chalk.redBright(error.message));
        }
    })
}

// const generateInitialData = async () => {
//     // check if data already exists
//     await generateInitialDataCards();

//     // check if data already exists
//     await generateInitialDataUsers();
// }

// exports.generateInitialData = generateInitialData;
exports.generateInitialDataCards = generateInitialDataCards;
exports.generateInitialDataUsers = generateInitialDataUsers;