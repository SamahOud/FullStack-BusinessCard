const mongoose = require("mongoose");
const chalk = require("chalk");

// Connect to MongoDB Locally
async function connect() {
    const server = process.env.SERVER || "localhost"; // 127.0.0.1
    return mongoose.connect(`mongodb://${server}:27017/business-card-app`)
        .then(() => { console.log(chalk.magentaBright("Connected to MongoDB Locally!")) })
        .catch((error) => { console.log(chalk.redBright.bold(`could not connect to mongoDb: ${error}`)) }
    )
}

module.exports = connect;