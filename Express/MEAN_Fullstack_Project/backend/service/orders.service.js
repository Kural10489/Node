const { json } = require("express");
const db = require("../models/index");
const orderSchema = db.orderpage;
const userSchema = db.users;


exports.orderService = async (req, res) => {
  const username = req.query;
  console.log(username);

  const orders = await orderSchema.find(username);

  const user = await userSchema.find({ email: username.username });

  const userAddress = await user.find((a) => {
    return a.address;
  }).address;

  const orderDetails = orders.map((a) => {
    a.address = userAddress;
    console.log(a.address);
    return a;
  });

  if (orderDetails) {
    return orderDetails;
  } else {
    return json("No Orders Found");
  }
};


// exports.orderPostService = async (req, res) => {
//    const orderDetails =await new Schema(req.body);
//       console.log(orderDetails);
//       const orders=await orderDetails.save(orderDetails)

//   if (orders) {
//     return orders;
//   } else {
//     return json("Error in Posting Orders ");
//   }
// };
