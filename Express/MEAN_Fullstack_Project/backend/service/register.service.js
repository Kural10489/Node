const db = require("../models/index");
const Users = db.users;
const bcrypt=require('bcrypt');


exports.Register = async(req, res) => {
    const email=req.body.email;
      //HAshing Password 
      const salt =await bcrypt.genSalt(10);
      const hashedPassword=await bcrypt.hash(req.body.password,salt)
  
    try{  
      //   Checking for a existing User 
      const existingUser= await db.users.find({email})
      // console.log("Existing User: ",existingUser);
      console.log("Log : ",existingUser[0]);

    if(existingUser[0]){
        console.log('exist user err');
        throw new Error('That email address is already in use. Please choose another.');
      } 
      // Create a user
      const users = new Users({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobileNumber: req.body.mobileNumber,
        email: req.body.email,
        password: hashedPassword,
        address: req.body.address,
        username:req.body.firstName
      });
       
      // Save users in the database
      
      const UserDetailsPost=await db.users.create(users);
      console.log(UserDetailsPost);
    }
    catch(error){

        if(error.message=='That email address is already in use. Please choose another.'){
            res.status(400).json({error:error.message})
            console.log("vantan");
        }
        else{
            res.status(400).json({error:error.message})
        }
          }

    };