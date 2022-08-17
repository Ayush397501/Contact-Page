const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/Coder-Club").then(()=>{
    console.log("connect..");
}).catch((err)=>{
    console.log("no connect...");
})