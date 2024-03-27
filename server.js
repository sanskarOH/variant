const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config(); 

const app = express();

const PORT = process.env.PORT || 5000; 
const DATABASE_URI = process.env.DATABASE_URL;

app.listen(PORT, () => {
    console.log(`API successfully started on port ${PORT}`);
});

mongoose
    .connect(DATABASE_URI)
    .then(() => {
        console.log("Connected to Database");
    })
    .catch((error) => {
        console.error("Error connecting to database:", error);
    });
