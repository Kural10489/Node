module.exports = app => {
    const tutorials = require("../controllers/register.controller");
  
    var router = require("express").Router();
  
    router.post("/register", tutorials.create);

    app.use(router);
};