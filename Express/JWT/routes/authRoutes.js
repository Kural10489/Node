const express = require('express');
const authRoutes=express.Router();

authRoutes.get('/',(req,res)=>{
    res.send('Working')
    console.log("siri sri sri sri sriNeeEee.....");
});

module.exports=authRoutes;