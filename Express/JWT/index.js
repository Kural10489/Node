const jsonwebToken = require("jsonwebtoken");
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const app = express();

app.get("/", (req, res) => {
  let token = jsonwebToken.sign(
    {
      date: new Date(),
    },
    "wefniwndiwefnuifbu3wujenbd",

  );
  console.log(token);
  res.json({
    message: "Nerupu da Nerunguda Paapo!",
    token,
  });
});

app.get("/check/:token", async (req, res) => {
  let token = req.params.token;
  try {
    let tokenResult = await jsonwebToken.verify(
      token,
      "wefniwndiwefnuifbu3wujenbd"
    );
    console.log(tokenResult);
    if (tokenResult) {
      res.json({ 
        message: "Success",
        date:new Date(tokenResult.date).getDate()
     });

    } else {
      res.status(500).json({
        message: "Something Went Wrong! ",
      });
    }
  } catch (error) {
    res.status(401).json({ message: "fail" });
  }
});
app.use(authRoutes);
app.listen(3000, () => {
  console.log("Server is running in 3000");
});

