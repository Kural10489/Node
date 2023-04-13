const loginService=require("../service/login.service")
const token=require("../jwt/signToken")
exports.login = async (req, res) => {
  try{
  console.log("login POST");

  const login=await loginService.loginService(req.body);
  const accessToken=await token.signAccessToken(login.email)
  console.log("Access token",accessToken);
  res.send(accessToken)

}
catch(error){
  res.send(error.messege)
}
};