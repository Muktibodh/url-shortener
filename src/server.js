const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const urlRoutes = require('./routes/urlRoutes');
const app = express();
const PORT = 3000;

//connect to the database
connectDB();

//middleware
app.use(bodyParser.json());


//middleware toIserv static files
// routes / ->urlRoutes.js

app.listen(PORT, () => {
    console.log('Server is running fine on ${PORT}');
})