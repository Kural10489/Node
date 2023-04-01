const db = require("../models/index");
const Schema = db.orderpage;

// exports.orderDetails = (req, res) => {
//   console.log("order page da GET");

//     // Validate request
//     Schema.find({})
//     .then(data => {
//       if (!data)
//         res.status(404).send({ message: "Not found Tutorial"});
//       else res.send(data);
      
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .send({ message: "Error retrieving Tutorial with id=" + id });
//     });
//   };


exports.orderDetails = (req, res) => {
      console.log("order page da GET");
//     const username = req.params.username;
//    console.log(username);
//     Schema.findOne({"username":username}).then((resp)=>{
//         console.log(resp.data);
//     }).catch((err)=>{console.log(err)}) 
//       .then(data => {
//         if (!data)
//           res.status(404).send({ message: "Not found Tutorial with id " + username });
//         else res.send(data);
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .send({ message: "Error retrieving Tutorial with id=" + username });
//       });

Schema.find({})
.then(data => {
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