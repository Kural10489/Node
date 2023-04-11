module.exports = (app) => {
    const deleteProductController = require("../controllers/deleteProduct.controller");
    const cartDetailsController = require("../controllers/cartDetails.controller");
    const cartPageController = require("../controllers/cartpage.controller");
  
    var router = require("express").Router();
  
    router.delete(`/:id`, deleteProductController.deleteProduct);
    router.get("/",cartDetailsController.cartDetails);
    router.post("/",cartPageController.addToCart);
  
    app.use("/cart", router);
  };
  