require('dotenv').config()
const express = require('express');
const connectDB =  require('./db/connect')
const cors = require('cors')
const notFound =  require('./middleware/not-found')

//routes
const profileRouter = require('./routes/profileRoute')
const app =  express();
app.use(cors());
app.use(express.json());
app.use('/profiles',profileRouter)
//Middleware
app.use(notFound)
//All Routes
//Home Route
app.use('/',(req,res)=>{
    res.send('hsa')
});

//Constants
const port = process.env.PORT;
const URI =  process.env.MONGO_URI;

const start = async ()=>{  
    try {
        await connectDB(URI)
        app.listen(port,()=>{
            console.log(port,"port running on")
        })
    } catch (error) {
        console.log(error)
    }
}

start()
