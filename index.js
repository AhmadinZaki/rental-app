const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// use bodyParser
app.use(bodyParser.json());

// import routes
const userRoute = require('./routes/User');
const mobilRoutes = require('./routes/Mobil');



app.use('/User', userRoute);
app.use('/Mobil', mobilRoutes);

// ROUTES
app.get('/', (req,res) => {
})


// Connect to DB
mongoose.connect('mongodb://localhost:27017/rental');

// How to we start listening to server
app.listen(3001)
