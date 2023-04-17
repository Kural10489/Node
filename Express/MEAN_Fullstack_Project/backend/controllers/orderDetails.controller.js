const db = require("../models/index");
const Schema = db.orderpage;
const orderServicePage=require("../service/orders.service")


exports.orderDetails = async(req, res) => {
  try{
    console.log("Order Page Ulla Vantn!");
    const orders=await orderServicePage.orderService(req,res);
    console.log(orders);
    res.status(200).send(orders)
  }
catch(err){
res.send(err.message)
}
  };


  exports.Order= async(req, res) => {
    try{
      console.log("order page POST da");
    const orders=await orderServicePage.orderPostService(req,res);
      console.log(orders);
    res.status(200).send(orders)

    }
    catch(err){
      res.send(err.message)
    }
  }