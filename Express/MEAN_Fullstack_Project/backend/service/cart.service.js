const { json } = require("express");
const db = require("../models/index");
const Schema = db.cartpage;

exports.addToCartService = async (req, res) => {
    try{
    console.log("addtocart page  POST da");
    const cartDetails = new Schema({
        id: req.body.id,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        quantity: req.body.quantity,
        size:req.body.size,
        image: req.body.image,
        totalAmount:req.body.totalAmount,
        username:req.body.username
        
    });
    const cartDetailsPost=await Schema.create(cartDetails);
    res.status(200).send(cartDetailsPost);
    console.log(cartDetailsPost);
}
    catch(err){
        res.status(401).send(err)
    }
  };


  exports.cartDetailsService= async(req, res) => {
    try{
    console.log("cart page GET da");
      // Validate request
      const cartDetails=await Schema.find({})

         res.send(cartDetails);
        
      }
    
      catch(err){
        res.send(err)
      }
    };

    exports.deleteProduct = async(req, res) => {
        try{
        console.log(" deleting a product da");
          // Validate request
          const id = req.params.id;
    
          const deleteProduct=await Schema.findByIdAndRemove(id)
          res.status(200).send(deleteProduct);
    }
          catch(err) {
            res.status(500).send(err);
             
        }
    };