const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../utils/path')

router.get(`/addProduct`,((req,res,next)=>{
   res.sendFile(path.join(rootDir,'views','addProduct.html'))
}))

router.post(`/storeProduct`,((req,res,next)=>{
    console.log(`Formdata: `,req.body);
    res.send(`<b>Product Submited !<b>`)
}))

module.exports=router;