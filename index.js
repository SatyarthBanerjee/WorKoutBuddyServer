const express = require("express");
require("dotenv").config()
const app = express();
const cors = require("cors")
const PORT = process.env.PORT;
const url = process.env.MONGO_URI
const mongoose = require("mongoose")
const allroutes = require("../server/Routes/route")
app.use(cors({origin:"*"}));
app.use(express.json())
app.use(allroutes)
mongoose.connect(url).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`)
    })
})