const productsService=require("../service/products.service")

module.exports={

getProducts : async(req, res) => {
  console.log("products page GET ithu");
    // Validate request
    try{
     const products=await productsService.getProductsService(req,res);
      res.status(200).send(products);
    }
    catch(error){
      res.status(404).send(error.message);
    }

  },
  getSingleProduct:async(req,res)=>{
    console.log("product page GET ithu");
    // Validate request
    try{
     const product=await productsService.getSingleProductService(req,res);
      res.status(200).send(product);
    }
    catch(error){
      res.status(404).send(error.message);
    }
  }
}