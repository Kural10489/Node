const db=require("../models/index")
const Backend=db.tutorials;

exports.login= (req,res)=>{
    console.log("Login page Ulla vantan!");


  const {email,password}=req.body;
  const user=Backend.findOne();
console.log(req.body);
  console.log(user);
}