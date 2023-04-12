const { json } = require("express");
const db = require("../models/index");
const Backend = db.users;
const bcrypt=require("bcrypt");

exports.loginService = async (data) => {
    console.log("it");
    const email=data.email
    const password=data.password
    const user = await Backend.findOne({email});
    const validUser=await bcrypt.compare(password,user.password);
    if(validUser){
        // Inga JWT potu antha token ah send pananumh
        return user
    }
    else{
        return json("User not found")
    }
  };