const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const icecreams = [
     {name: 'vanilla', price: 10, awesomeness: 3},
     {name: 'chocolate', price: 4, awesomeness: 8},
     {name: 'banana', price: 1, awesomeness: 1},
     {name: 'greentea', price: 5, awesomeness: 7},
     {name: 'jawbreakers', price: 6, awesomeness: 2}
];

app.get("/icecreams", function(req, res) {
     res.render("icecreams", {
       flavors: icecreams
     });
});

app.listen(PORT, function() {
     // Log (server-side) when our server has started
     console.log("Server listening on: http://localhost:" + PORT);
});
   