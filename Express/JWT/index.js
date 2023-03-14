const jsonwebToken = require("jsonwebtoken");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let token = jsonwebToken.sign(
    {
      date: new Date(),
    },
    "wefniwndiwefnuifbu3wujenbd"
  );
  console.log(token);
  res.json({
    message: "Nerupu da Nerunguda Paapo!",
    token,
  });
});

app.listen(3000, () => {
  console.log("Server is running in 3000");
});
