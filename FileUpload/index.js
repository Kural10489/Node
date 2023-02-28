const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
app.set(`views`, path.join(__dirname, "views"));
app.set("view engine", "ejs");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname.replace(/\.[^/.]+$/,"") + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
let maxSize = 2 * 1000 * 1000;
let upload = multer({
  storage: storage,
  limits: {
    fileSize: maxSize,
  },
  fileFilter: function (req, file, cb) {
    let fileTypes = /jpeg|jpg|png/;
    let mimetype = fileTypes.test(file.mimetype);
    console.log(file.mimetype);
    let extname = fileTypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(`Error: File Upload only supports  ${fileTypes}`);
  },
}).single(`mypic`);

app.get("/", (req, res) => {
  res.render("signup");
});

app.post("/upload", (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.send("Sucess. Image Uploaded");
    }
  });
});
app.listen(8080, () => {
  console.log("Server is Running");
});
