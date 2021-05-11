const express = require('express')
const mongoose = require('mongoose')
const app = express()

const url = 'mongodb://localhost/AliensDb'

mongoose.connect(url ,{useNewUrlParser:true,useUnifiedTopology: true})
const con =  mongoose.connection

app.use(express.json())
con.on('open' , ()=> {
    console.log("connected......");
})
  const alienRouter = require('./routes/aliens')
  app.use('/aliens' ,alienRouter )
  

app.listen(9000,()=>{
    console.log("server is running....")
})

