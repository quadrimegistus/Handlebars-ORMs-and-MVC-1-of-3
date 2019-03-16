// Dependencies
const express = require("express");
const mysql = require("mysql");
const exphbs = require("express-handlebars");

// Create express app instance.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8082;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// MySQL DB Connection Information (remember to change this with our specific credentials)
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345678",
  database: "wizard_schools_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes
app.get("/", function(req, res) {
  connection.query("SELECT * FROM schools", function(err, data) {
    console.log(data);
    res.render("index", {
      mySchools: data,
      pageTitle: 'Alper\'s Magical Schools'
    });
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
