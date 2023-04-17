module.exports = (app) => {
    const cartPageController = require("../controllers/cartpage.controller");
    const jwt=require("../jwt/signToken")
    var router = require("express").Router();
  
    router.delete(`/:id`, cartPageController.deleteProduct);
    router.get("/",cartPageController.cartDetails);
    router.post("/",cartPageController.addToCart);
  
    app.use("/cart", router);
  };
  