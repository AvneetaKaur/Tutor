const mongoose = require("mongoose");
// creating a database
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/projectdata", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection succesful");
}).catch((error)=>{
    console.log(error);
})