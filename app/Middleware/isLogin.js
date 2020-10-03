const isLogin = (req, res, next) => {
  if (req.session.loggedin) {
    next();
  } else {
    res.status(302).redirect("/login");
  }
};

module.exports = {
  isLogin,
};
