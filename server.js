// require express
const express = require('express')
const connect = require('./config/connectDB')
//create instance

const app = express()

// middleware body parser

app.use(express.json())

//require .env
require('dotenv').config()

//connection to DB
connect()

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
//create Port

const PORT = process.env.PORT

// listen to the PORT

app.listen(PORT,(err)=>{
    err?console.log(err)
    :console.log(`server is running on PORT ${PORT}`)
})


app.use('/api/user', require('./routes/user'))
app.use('/api/film', require('./routes/film'))