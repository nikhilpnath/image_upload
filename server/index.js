const express = require("express")
const cors = require("cors");
const mongoose = require("mongoose")
const app = express();
require('dotenv').config()


const uploadRoute = require("./route/imageUpload")


const port = process.env.PORT || 8005;

app.use(cors({
    origin:'http://localhost:3000'
}))

app.use(express.json());

app.use(express.static('public'))

mongoose.connect(process.env.DATABASE)
.then(()=>console.log("connected Successfully"))
.catch(()=>console.log("Database connection failed"))


app.use('/api', uploadRoute)

app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})