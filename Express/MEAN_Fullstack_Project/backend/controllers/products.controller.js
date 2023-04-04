const db = require("../models/index");
const Tutorial = db.products;

exports.getProducts = (req, res) => {
  console.log("products page GET ithu");
    // Validate request
    Tutorial.find({})
    .then(data => {
      console.log(data);
      if (!data)
        res.status(404).send({ message: "Not found Tutorial"});
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
  };