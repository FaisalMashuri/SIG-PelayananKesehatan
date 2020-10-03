const express = require("express");
const router = express.Router();
const { halamanLogin, login } = require("../Controllers/Auth");

router.route("/").get(halamanLogin).post(login);

module.exports = router;
