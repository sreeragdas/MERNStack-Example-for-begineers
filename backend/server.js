const express = require('express');
const cors=require('cors');
const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();


const app=express();
const port =  5000;
app.use(express.json());
const uri="mongodb+srv://sreerag:vaishakh@cluster0.xqc4l.mongodb.net/?retryWrites=true&w=majority&ssl=true"
app.use(cors())
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    })

app.get('/',(req,res)=>{
    res.send('goodday!')
})
const exerciseRouter=require('./routes/exercise')
const userRouter=require('./routes/user')
app.use('/exercise',exerciseRouter)
app.use('/users',userRouter)
app.listen(port , ()=>{
    console.log(`Server is running in port : ${port}`)
})



