const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

// dotenv config 
require('dotenv').config();

// app config to start our application 

const app = express();
const port = process.env.PORT || 4000; 


//middlewares 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use(bodyParser.json());