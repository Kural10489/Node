const cartService=require("../service/cart.service")

exports.addToCart = (req, res) => {
  console.log("addtocart page  POST da");
  cartService.addToCartService(req,res);
  };

exports.cartDetails = (req, res) => {
  console.log("cart page GET da");
  cartService.cartDetailsService(req,res);
    };

exports.deleteProduct = (req, res) => {
  console.log(" deleting a product da");
  cartService.deleteProduct(req,res);
    }