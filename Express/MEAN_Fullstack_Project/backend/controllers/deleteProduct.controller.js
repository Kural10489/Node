const db = require("../models/index");
const Schema = db.cartpage;

exports.deleteProduct = (req, res) => {
  console.log(" deleting a product da");
    // Validate request
    const id = req.params.id;
  
 

    Schema.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
  };