const db = require("../models/index");
const Schema = db.orderpage;

exports.Order= (req, res) => {
  console.log("order page POST da");
    // Validate request
    if (!req.body.id) {
      res.status(400).send({ message: "Content can not be empty!" });
      console.log("No");
      return;
    }
  
    // Create a Product
console.log(req.body.username);
      const orderDetails = new Schema(req.body);
      console.log(orderDetails);
    // Save Products in the database
    
    orderDetails
      .save(orderDetails)
      .then(data => {
        console.log(data);
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Products."
        });
      });
  };