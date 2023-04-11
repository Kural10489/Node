module.exports = (app) => {
  const productsController = require("../controllers/products.controller");

  var router = require("express").Router();

  router.get("/", productsController.getProducts);

  app.use("/products", router);
};
