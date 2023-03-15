const express=require('express');
const path=require('path');
const app=express();
const User= require('./models/Users');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
app.set("view engine","pug");
app.set("views", path.join(__dirname, "views"))

app.get('/',(req,res)=>{
    res.render("index",{
        names:["kural","Moni"]
    });
})
const register=(req,res,next)=>{
    bcrypt.hash(req.body.password,10,(err,hashedPass)=>{
        if(err){
            res.json({Error:err})
        }
    })
let user= new User({
    name:req.body.name,
    email:req.body.email,
    password:req.body.hashedPass,
    phone:req.body.phone,
})
user.save().then(user=>{
    res.json({
        message:'User Added Successfully !'
    })
}).catch(error=>{
    res.json({
        message:"An error Ocured !"
    })
})
}
app.listen(3000);