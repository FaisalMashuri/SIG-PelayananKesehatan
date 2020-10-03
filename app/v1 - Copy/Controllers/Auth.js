const bcrypt = require("bcrypt");
const {
  tambahAdmin,
  cekUser,
  getUser,
  getUserDetail,
  updatePassword,
  deleteUser,
} = require("../Models/Auth");

const halamanLogin = (req, res) => {
  res.render("admin/login");
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await cekUser(username);

  if (user.length == 0) {
    req.flash("error", "User tidak ditemukan");
  }

  const data = {};
  data.user = user;
  console.log(data.user);
  console.log(data.user[0].password, password);
  const isMatch = await bcrypt.compare(password, data.user[0].password);
  console.log(isMatch);
  if (!isMatch) {
    req.flash("error", "Password Salah");
    res.status(302).redirect("/login");
  }

  req.session.loggedin = true;
  req.session.name = username;
  req.flash("success", "Selamat Datang");
  res.status(302).redirect("/admin");
};

module.exports = {
  halamanLogin,
  login,
};
