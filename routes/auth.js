const express = require("express");
const { registeruser, loginUser } = require("../controllers/auth");
const { validatorRegister, validatorLogin } = require("../validators/auth");
const router = express.Router();


router.post("/register", validatorRegister, registeruser);

router.post("/login", validatorLogin, loginUser);


module.exports = router;