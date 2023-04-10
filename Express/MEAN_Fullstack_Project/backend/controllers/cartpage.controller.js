const db = require("../models/index");
const Schema = db.cartpage;

exports.addToCart = (req, res) => {
  console.log("addtocart page  POST da");
    // Validate request
    if (!req.body.id) {
      res.status(400).send({ message: "Content can not be empty!" });
      console.log("No");
      return;
    }
  
    // Create a schema

    const cartDetails = new Schema({
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

    // Save shcema in the database
    
    cartDetails
      .save(cartDetails)
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