const mysql = require("mysql");
const db = mysql.createConnection({
  hostname: "localhost",
  user: "root",
  password: "",
  database: "mygis",
});
module.exports = db;
