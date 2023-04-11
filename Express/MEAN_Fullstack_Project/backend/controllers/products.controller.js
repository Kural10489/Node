const db = require("../models/index");
const Products = db.products;

exports.getProducts = (req, res) => {
  console.log("products page GET ithu");
    // Validate request
    Products.find({})
    .then(data => {

      if (!data)
        res.status(404).send({ message: "Not found Products"});
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Products with id=" + id });
    });
  };