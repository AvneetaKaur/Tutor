const mongoose =  require("mongoose");

const regSchema = new mongoose.Schema({
    subject:{
        type:String,
        required:true
    },
    class:{
        type:Number,
        required:true
    },
    school:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    }
});

const Register = mongoose.model("Register", regSchema);

module.exports = Register;