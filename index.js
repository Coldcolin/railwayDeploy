const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4455;
const app = express();

app.use(cors());

app.get("/", (req, res, next)=>{
    try{
        res.status(200).send("testing Railway")
    }catch(err){
        next(err)
    }
})

app.listen(PORT, ()=>{
    console.log(`server running on PORT: ${PORT}`)
})