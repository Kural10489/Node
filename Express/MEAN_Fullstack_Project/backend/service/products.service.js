const db = require("../models/index");
const Products = db.products;

module.exports={

getProductsService : async(req, res) => {
  console.log("products page GET ithu");
    // Validate request
    console.log(req.params.category); 
    const category=req.params.category;
    const products=await Products.find({category:category});
    if(products){
        return products;
    }
    else
    {
        return json("Error in fetching Products from Database")
    }
    
  
},
getSingleProductService :async(req,res)=>{
    console.log("Single Products Get ra ithu");
    const productId=req.params.id;
  

    console.log(productId);
    console.log("next");
    const product=await Products.find({id:productId})
  
    console.log("productService :" ,product);
    if(product){
        return product;
    }
    else
    {
        return json("Error in fetching Product from Database")
    }
}

}