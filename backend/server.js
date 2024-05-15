// Required libraries
const express = require('express');
const cors = require('cors');
const userController = require('./routers/userController');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Define app
const app = express();

// Use cors
app.use(cors());

// Use cookie parser
app.use(cookieParser());

// Use signup routes
//app.use('/user', userController);

// Start listening
const port = process.env.PORT || 3002;
const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
