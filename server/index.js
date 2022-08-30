// importing libraries to support 
import express from "express"
// to connect to database 
import mongoose from "mongoose"
// for connecting the .env file to secure our privacy 
import dotenv from "dotenv"
import bcrypt from "bcryptjs"

import userRoutes from "./routes/users.js"
import videoRoutes from "./routes/videos.js"
import commentsRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"

const app = express()
dotenv.config()
// mongoose connetion call
const connect = () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("connected to db ")
    }).catch((err) => {
        throw err;
    })
}

app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/videos",videoRoutes)
app.use("/api/comments",commentsRoutes)

app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "something went wrong ";
    return res.status(status).json({
        success:false,
        status,
        message,

    });
});

app.listen(3000, () => {
    connect()
    console.log("connected! to server")
});


