module.exports = (app) => {
    const orderDetailController = require("../controllers/orderDetails.controller");
    const orderpageController=require("../controllers/orderpage.controller")
    const jwt=require("../jwt/signToken")
    var router = require("express").Router();
  
    router.get("/",jwt.verifyAccessToken, orderDetailController.orderDetails);
    router.post("/", orderpageController.Order);
  
    app.use("/OrderDetails", router);
  };
  