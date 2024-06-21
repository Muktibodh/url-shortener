const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const urlRoutes = require('./routes/urlRoutes');
const path = require('path');
const app = express();
const PORT = 3000;

//connect to the database
connectDB();

//middleware
app.use(bodyParser.json());


//middleware toIserv static files
app.use('/', urlRoutes);
app.use(express.static('public'));

// routes / ->urlRoutes.js

app.listen(PORT, () => {
    console.log(`Server is running fine on ${PORT}`);
})