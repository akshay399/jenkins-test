const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
// Connect to MySQL database
// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "manager",
//   database: "my_db",
// });
var user = [
  { id: 1, name: "akshay", age: 20 },
  { id: 2, name: "ronit", age: 21 },
  { id: 3, name: "sudarshan", age: 22 },
  { id: 4, name: "saurabh", age: 23 },
];
// app.get("/", (req, res) => {
//   connection.query("SELECT * FROM user", (err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(user);
//     }
//   });
// });
app.get("/", (req, res) => {
  res.send(user);
});
app.post("/add", (req, res) => {
  console.log(req);
  user.push(req.body);
  res.send(user);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
