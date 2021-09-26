var util= require('util');
var encoder = new util.TextEncoder('utf-8');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
require('dotenv').config();


const app = express();
const port = process.env.Port || 5000;

app.use(cors({
    origin: "*"
}));
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('mongodb database connection established');
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.post('/testRoute', (req, res) =>{
    console.log(req.body)
    console.log(req.body.data)
    // Run the mongo db connection

    //Send back whatever you want to the user 200, ok, the data again
    res.send(req.body.data)
})


app.listen(port, () =>{
    console.log('Server is running on port: ${port}');
});

