const db = require("../models/index");
const Backend = db.users;
const bcrypt=require("bcrypt");

exports.login = async (req, res) => {
  try{
  console.log("login POST");
  const { email, password } = req.body;
  console.log(req.body)
  const user = await Backend.findOne({ email });
  const validUser=await bcrypt.compare(password,user.password);
  console.log(validUser)  
  res.json(user.token)
}
catch{
  res.send("Invalid Username/Password")
}
};