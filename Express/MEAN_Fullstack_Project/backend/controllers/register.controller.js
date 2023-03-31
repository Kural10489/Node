const db = require("../models/index");
const Tutorial = db.tutorials;

exports.create = (req, res) => {
  console.log("Register page da ithu");
    // Validate request
    if (!req.body.firstName) {
      res.status(400).send({ message: "Content can not be empty!" });
      console.log("No");
      return;
    }
  
    // Create a Tutorial
    console.log(req.body);
    const tutorial = new Tutorial({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      mobileNumber: req.body.mobileNumber,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address
    });
     console.log(tutorial);
    // Save Tutorial in the database
    
    tutorial
      .save(tutorial)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };