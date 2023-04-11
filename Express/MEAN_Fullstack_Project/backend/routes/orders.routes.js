module.exports = (app) => {
    const orderDetailController = require("../controllers/orderDetails.controller");
    const orderpageController=require("../controllers/orderpage.controller")
    var router = require("express").Router();
  
    router.get("/", orderDetailController.orderDetails);
    router.post("/", orderpageController.Order);
  
    app.use("/OrderDetails", router);
  };
  