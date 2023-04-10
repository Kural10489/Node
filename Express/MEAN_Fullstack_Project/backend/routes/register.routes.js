module.exports = app => {
const registerController=require('../controllers/register.controller')

    var router = require("express").Router();
    router.post("/",registerController.create);

    app.use("/register",router);
};