import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import bookRoute from './route/book.route.js';
import cors from 'cors';    
import userRoute from './route/user.route.js';
import contactRoute from './route/contact.route.js';

const app = express()
app.use(cors()); // used for pass data from backend to frontend
app.use(express.json()); //used to pass data from frontend to database in form of json

dotenv.config(); // load env file

const PORT=process.env.PORT;
const URL=process.env.mongoDBURL;

//connection MONGODB
try {
    mongoose.connect(URL)
        console.log("succesfully connected mongoose");
} catch (error) {
    console.log("Error: ");
}

//defining routes 
app.use("/book",bookRoute);
app.use("/user",userRoute);
app.use("/contactUser",contactRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})