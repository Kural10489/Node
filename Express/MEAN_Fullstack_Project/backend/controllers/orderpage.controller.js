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
    const orderDetails = new Schema({
        id: req.body.id,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        quantity: req.body.quantity,
        size:req.body.size,
        image: req.body.image,
        image2: req.body.image2,
        image3: req.body.image3,
        image4: req.body.image4,
        username:req.body.username
    });

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