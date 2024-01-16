const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error("Authentication failed!");
    }
    const decodedToken = jwt.verify(token, "supersecret_dont_share");
    req.userData = { userId: decodedToken.userId };
    let {session} = await User.findOne({ email: decodedToken.email });
    if(session.includes(token)){
      next()
    }else{
      res.status(403).json({message: "Please Login again", success: false, logout: true})
    }
  } catch (err) {
    console.log(err);
    res.status(403).json({
      success: false,
      message: "Authentication failed!",
    });
  }
};
