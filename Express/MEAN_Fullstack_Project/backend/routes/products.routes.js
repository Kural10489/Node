module.exports = (app) => {
  const productsController = require("../controllers/products.controller");

  var router = require("express").Router();

  router.get("/:category", productsController.getProducts);

  app.use("/products", router);
};
