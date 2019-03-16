const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const lunches = [
  {
    lunch: "Beet & Goat Cheese Salad with minestrone soup."
  }, {
    lunch: "Pizza, two double veggie burgers, fries with a Big Gulp"
  }
];

// Routes
app.get("/weekday", function(req, res) {
  const html = `<h1>${lunches[0].lunch}</h1>`;
  res.send(html);
});

app.get("/weekend", function(req, res) {
  const html = `<h1>${lunches[1].lunch}</h1>`;
  res.send(html);
});

app.get("/lunches", function(req, res) {
  const eater = 'david';
  let html = `
    <style media="screen">
      li {
        height : 100px;
        width: 100px;
        color: red;
        background-color: purple;
        margin-bottom: 30px;
      }
    </style>
    <h1>Lunches for ${eater}</h1>
    <ul>
  `;

  for (let i = 0; i < lunches.length; i++) {
    html += `<li>${lunches[i].lunch}</li>`;
  }

  html += `</ul>`;

  res.end(html);
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});