const db = require("../models/index");
const Users = db.users;
const jwt=require("jsonwebtoken")
const bcrypt=require('bcrypt');

exports.create = async(req, res) => {
  console.log("Register page da ithu");


  const token=jwt.sign({username:req.body.firstName,email:req.body.email},"secret")
    // Validate request
    if (!req.body.firstName) {
      res.status(400).send({ message: "Content can not be empty!" });
      console.log("No");
      return;
    }
    
    //HAshing Password 
    const salt =await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password,salt)

    // Create a user
    console.log(req.body.firstName);
    const users = new Users({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      mobileNumber: req.body.mobileNumber,
      email: req.body.email,
      password: hashedPassword,
      address: req.body.address,
      token:token,
      username:req.body.firstName
    });
     
    // Save users in the database
    
    users
      .save(users)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      });
  };