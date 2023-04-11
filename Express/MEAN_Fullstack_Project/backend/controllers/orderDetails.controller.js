const db = require("../models/index");
const Schema = db.orderpage;



exports.orderDetails = (req, res) => {
      console.log("order page da GET");
    const username=req.query
    console.log(username);


  
      Schema.find(username)
      .then(data => {
        console.log(data);
        if (!data)
          res.status(404).send({ message: "Not found with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving with id=" + id });
      });

  };