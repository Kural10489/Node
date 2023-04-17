const jwt = require("jsonwebtoken");
const createError = require("http-errors");
// const dotenv=require('dotenv')
// dotenv.config();
let ACCESS_TOKEN_SECRET =
  "09bc64727a57360c285a303e076112710118733165146ae2c57b8291f909c9ec";
REFRESH_TOKEN_SECRET =
  "7f7ebcb3ea9806c397f7b591e82159992f38f316712a842cb72c167d9330ce00";

module.exports = {
  signAccessToken: (userId) => {
    console.log("token ulla vantan");
    return new Promise((resolve, reject) => {
      const payload = {
        name: "JWT kural",
      };
      const secret = ACCESS_TOKEN_SECRET;

      const options = {
        expiresIn: "1h",
        audience: userId,
      };

      jwt.sign(payload, secret, options, (err, token) => {
        if (err) reject(err);
        resolve(token);
      });
    });
  },

  // VERIFY THE TOKEN
  verifyAccessToken: (req, res, next) => {
    if (!req.headers["authorization"]) {
      return next(createError.Unauthorized());
    }
    const authHeader = req.headers["authorization"].split(" ")[1];

    // jwt.verify(authHeader,ACCESS_TOKEN_SECRET,(err, payload) => {
    //     if (err) {
    //       return next(createError.Unauthorized());
    //     }
    //     req.payload = payload;
    //     next();
    //   }
    // );
    next()
  },
};
