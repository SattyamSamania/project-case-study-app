const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

// import database 
const database = require('./database')


// dotenv config 
require('dotenv').config();

// app config to start our application 

const app = express();
const port = process.env.PORT || 4000; 


//middlewares 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use(bodyParser.json());


//DB Connection 
database.on('error', console.error.bind(console, 'MongoDB failed to connect'))

app.get('/', (req, res) => {
    res.send("Project Case Study App");
})

app.listen(port, ()=> console.log(`Server is running at PORT ${port}`))