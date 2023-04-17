module.exports = (app) => {
  const productsController = require("../controllers/products.controller");

  var router = require("express").Router();

  router.get("/:category", productsController.getProducts);
  router.get("/product-detail/:id", productsController.getSingleProduct);

  app.use("/products", router);
};
