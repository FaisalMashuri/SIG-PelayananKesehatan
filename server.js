const express = require("express");
const cors = require("cors");
const ejs = require("ejs");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");
const methodOverride = require("method-override");
const upload = multer();
const dotenv = require("dotenv");
const flash = require("express-flash");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const db = require("./config/db");
dotenv.config({ path: "./config.env" });
const app = express();
const Pelayanan = require("./app/v1/Routes/Pelayanan");
const Auth = require("./app/v1/Routes/Auth");
const Pelayanan2 = require("./app/v1 - Copy/Routes/Pelayanan");
const Admin = require("./app/v1 - Copy/Routes/Admin");
const Auth2 = require("./app/v1 - Copy/Routes/Auth");
const { isLogin } = require("./app/Middleware/isLogin");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(upload.array());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  session({
    secret: "123456cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 },
  })
);
app.use(flash());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const port = process.env.PORT || 5000;

db.connect((err) => {
  if (err) throw err;
  console.log("database terkoneksi");
});

app.use(morgan("dev"));
// let whitelist = ["http://localhost:3000", "http://localhost:5000"];
// let corsOption = {
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) == -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("not allowed by CORS"));
//     }
//   },
// };

// app.use(cors(corsOption));

// Routes
app.get("/", (req, res) => {
  res.redirect("/pelayanan");
});

app.use("/pelayanan", Pelayanan2);
app.use("/admin/", isLogin, Admin);
app.use("/login", Auth2);
app.get("/logout", (req, res) => {
  req.flash("success", "Kamu telah Logout");
  req.session.destroy();
  res.status(302).redirect("/login");
});
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from

//   next();
// });

app.use("/api/v1/pelayanan", Pelayanan);
app.use("/api/v1/auth", Auth);

app.listen(port, () => console.log(`Server Running on ${port}`));
