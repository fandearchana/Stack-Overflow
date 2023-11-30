import express from "express";
import mongoose from "mongoose"; // for CRUD operation 
import cors from 'cors'          // to elliminate cross origin issue
//import { configDotenv } from "dotenv";
import dotenv from 'dotenv'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

const app = express();
dotenv.config();

app.use(express.json({limit:"30mb", extended:"true"})); // as we used REST api
app.use(express.urlencoded({limit:"30mb", extended:"true"})) ;
app.use(cors());

app.get ('/', (req , res)=>{
    res.send('This is a stackoverflow clone api')
}) ;

app.use('/user', userRoutes);
app.use('/questions', questionRoutes);
app.use('/answer', answerRoutes);

const PORT= process.env.PORT || 5000; // if port not available then it take 5000

const DATABASE_URL = process.env.CONNECTION_URL;

mongoose.connect(DATABASE_URL , {useNewUrlParser: true, useUnifiedTopology : true})
    .then(() => app.listen(PORT , () => {
        console.log(`server running on port ${PORT}`)
    }))
    .catch((err) => console.log (err.message))