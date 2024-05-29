const config = require("config");
const ENVIRONMENT = config.get("NODE_ENV");

async function connectToDB() {
    if (!ENVIRONMENT || ENVIRONMENT === "development") {
        const connect = require("./mongodb/connectToMongodbLocally");
        const void_ = await connect()
        return void_;
    }

    if (ENVIRONMENT === "production") {
        const connect = require("./mongodb/connectToAtlas");
        const void_ = await connect()
        return void_;
    }
}

module.exports = connectToDB