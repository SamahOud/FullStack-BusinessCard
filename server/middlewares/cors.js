const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
    origin: [
        'http://127.0.0.1:5500',  // allow to server to accept request from live server
        'http://localhost:3000'], // allow to server to accept request from localhost 3000 (currently not exist)
    optionsSuccessStatus: 200,  // some legacy browsers (IE) check this optionsSuccessStatus value as the success status
}));

module.exports = app;