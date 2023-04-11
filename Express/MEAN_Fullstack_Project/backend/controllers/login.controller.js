const db=require("../models/index")
const Backend=db.users;
let token;
exports.login= (req,res)=>{
    console.log("Login page Ulla vantan!");

Backend.find({})
.then(data => {

  if (!data)
    res.status(404).send({ message: "Not found with id " + data });

  else res.send(data);
})
.catch(err => {
  res
    .status(500)
    .send({ message: "Error retrieving with id=" + data });
});
} 