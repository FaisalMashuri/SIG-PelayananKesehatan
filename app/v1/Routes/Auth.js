const express = require("express");
const router = express.Router();
const { login, tambah } = require("../Controllers/Authentication");
router.post("/login", login);
router.post("/", tambah);

module.exports = router;
