const db = require("../../../config/db");
const Token = require("../../Middleware/generateToken");

const bcrypt = require("bcrypt");
const {
  tambahAdmin,
  cekUser,
  getUser,
  getUserDetail,
  updatePassword,
  deleteUser,
} = require("../Models/Auth");

// Login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await cekUser(username);

    if (user.length == 0) {
      res.status(400).json({
        success: false,
        msg: "Incorect Username",
      });
    }
    const data = {};
    data.user = user;

    const isMatch = await bcrypt.compare(password, data.user[0].password);
    console.log(isMatch);
    // const validationPassword = await bcrypt.compare(
    //   password,
    //   data.user[0].password
    // );
    // console.log(validationPassword);
    // res.send(validationPassword);
    if (!isMatch) {
      res.status(400).json({
        success: false,
        error: "Incorect Password",
      });
    }

    let token = Token.generateToken({ id: user.id });
    res.status(200).json({
      success: true,
      msg: "login berhasi",
      token: token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "serverError",
    });
  }
};

const tambah = async (req, res) => {
  try {
    let { username, password, fullname } = req.body;
    const user = await cekUser(username);
    if (user.length > 0) {
      res.status(400).json({
        success: false,
        error: "Username Sudah Digunakan !",
      });
    }
    const salt = await bcrypt.genSalt(10);
    passwordBaru = await bcrypt.hash(password, salt);

    const data = await tambahAdmin(username, passwordBaru, fullname);

    if (data.affectedRows > 0) {
      res.status(200).json({
        success: true,
        msg: "Admin berhasil dibuat",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  login,
  tambah,
};
