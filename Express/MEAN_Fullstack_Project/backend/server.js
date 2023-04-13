const express = require("express");
const cors = require("cors");
const app = express();
const createError=require('http-errors');
const db = require("./models");

// Env file 
const dotenv=require('dotenv')
dotenv.config();

var corsOptions = {
  origin: "http://localhost:4200"
};


app.use(cors(corsOptions));


app.use(express.json());

express.urlencoded({ extended: true })
app.use(express.urlencoded({ extended: true }));

// Database Connection
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// Routes 

require("./routes/register.routes")(app)
require("./routes/login.routes")(app)
require("./routes/products.routes")(app)
require("./routes/cart.routes")(app)
require("./routes/orders.routes")(app)



// set port, listen for requests
const PORT = process.env.PORT||3000 ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});