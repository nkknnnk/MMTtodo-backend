const express = require("express");
const router = express.Router();


const { signup, login, logoutFromAllDivices } = require("../controllers/userController");

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logoutFromAllDivices);

module.exports = router;
