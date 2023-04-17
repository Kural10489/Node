
const registerService=require("../service/register.service")

exports.create = async(req, res) => {
  console.log("Register page da ithu");


 registerService.Register(req,res);
  };