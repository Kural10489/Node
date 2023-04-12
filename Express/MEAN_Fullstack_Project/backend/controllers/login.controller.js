const db = require("../models/index");
const Backend = db.users;
const bcrypt=require("bcrypt");
const loginService=require("../service/login.service")

exports.login = async (req, res) => {
  try{
  console.log("login POST");

  const login=await loginService.loginService(req.body);
  console.log('11ht line',login);
  res.send(login)
  // const user = await Backend.findOne({ email });
  // const validUser=await bcrypt.compare(password,user.password);
  // console.log(validUser)  
  // res.json(user.token)
}
catch{
  res.send("Invalid Username/Password")
}
};