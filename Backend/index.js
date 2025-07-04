const express = require('express')
const cors = require("cors"); // Import the cors middleware
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env file

// Ensure jobRoutes is required BEFORE it's used by app.use
const jobRoutes = require("./routes/JobRoutes");


const app = express()
app.use(cors()); 
app.use(express.json()); 


const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;


mongoose.connect(MONGO_URI, {

}).then(() => {
    console.log(" MongoDB Connected Successfully ..");
}).catch((err) => {
    console.log("MongoDB Connection Unsuccessful....", err);
});

app.get('/',(req,res)=>{
    res.send("working...")
})
app.use("/jobs", jobRoutes);


app.listen(PORT,()=>{
    console.log(`Listening PORT : ${PORT}`);
})
