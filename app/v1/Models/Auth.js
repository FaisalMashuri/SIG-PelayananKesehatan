const db = require("../../../config/db");
const Token = require("../../Middleware/generateToken");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const tambahAdmin = (username, password, fullname, res) => {
  return new Promise(async (resolve) => {
    sql = `INSERT INTO admin (username,password,fullname) VaLUES("${username}", "${password}", "${fullname}")`;
    db.query(sql, (err, res) => {
      if (err) throw err;
      resolve(res);
    });
  });
};

const cekUser = (username) => {
  return new Promise((resolve) => {
    const sql = `SELECT * FROM admin WHERE username="${username}"`;
    db.query(sql, (err, res) => {
      if (err) throw err;
      resolve(res);
    });
  });
};

module.exports = {
  tambahAdmin,
  cekUser,
};
