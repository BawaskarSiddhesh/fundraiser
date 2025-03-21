const express = require("express");
const { register, login, getUser } = require("../controllers/authController.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user",  getUser); 

module.exports = router;
