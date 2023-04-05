const express = require("express");
const cors = require("cors");
const routes=require('./routes/tutorials.routes')
const app = express();
const db = require("./models");
const registerController=require('./controllers/register.controller')
const loginController=require('./controllers/login.controller')
const productsController=require('./controllers/products.controller');
const cartPageController=require('./controllers/cartpage.controller');
const cartDetailsController=require('./controllers/cartDetails.controller')
const deleteProductController=require('./controllers/deleteProduct.controller')
const orderpageController=require("./controllers/orderpage.controller")
const orderDetailController=require("./controllers/orderDetails.controller");
var corsOptions = {
  origin: "http://localhost:4200"
};


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
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


app.get("/", (req, res) => {
   res.json({"YEs":"Running"})
   console.log("running");
  });
app.get("/user",loginController.login,);
app.get('/products',productsController.getProducts)
app.get('/cart',cartDetailsController.cartDetails)
app.get('/OrderDetails',orderDetailController.orderDetails)

app.post('/cart',cartPageController.addToCart)
app.post("/register",registerController.create);
app.post("/user",loginController.login);
app.post("/OrderDetails",orderpageController.Order)

app.delete(`/cart/:id`,deleteProductController.deleteProduct);
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});