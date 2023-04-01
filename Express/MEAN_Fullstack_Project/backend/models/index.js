const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model")(mongoose);
db.products=require("./products.model")(mongoose);
db.cartpage=require("./cart.model")(mongoose);
db.orderpage=require("./orders.model")(mongoose)
module.exports = db;