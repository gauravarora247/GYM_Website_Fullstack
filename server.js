const express = require('express');
const path = require('path')
const dotenv = require('dotenv')
const bodyparser = require("body-parser");
const morgan = require('morgan')
const connectDb= require('./connection/Db');

const app= express();

dotenv.config( { path : 'config.env'} )

//db connection
connectDb();

//port
const PORT = process.env.PORT || 8080

//logger
app.use(morgan('dev'))

//body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")

//static 
app.use(express.static(path.join(__dirname, 'public')));

//route
app.use('/',require('./routes/route'))

//listen
app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});