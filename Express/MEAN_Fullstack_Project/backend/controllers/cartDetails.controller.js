const db = require("../models/index");
const Schema = db.cartpage;

exports.cartDetails = (req, res) => {
  console.log("cart page GET da");
    // Validate request
    Schema.find({})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found "});
      else res.send(data);
      
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving data :" + data });
    });
  };