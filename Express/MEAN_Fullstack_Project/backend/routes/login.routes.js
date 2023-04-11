module.exports = (app) => {
  const loginController = require("../controllers/login.controller");

  var router = require("express").Router();

  router.post("/", loginController.login);
  router.get("/", loginController.login);

  app.use("/user", router);
};
