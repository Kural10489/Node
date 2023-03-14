const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:5,
        max:255
    },
    email:{
        type:String,
        requires:true
    },
    password:{
        type:String,
        requires:true
    }
});
module.exports=mongoose.model("User",userSchema);