const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

const port = process.env.PORT || 5252;

app.get('/', (req, res) =>{
    res.send("Hello, world!");
});

app.listen(port, ( ) =>{
    console.log(`listening on port: ${port}`);
});
