// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const morgan = require("morgan");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded",
  })
);
app.use(express.static("public"));

// all routes specified and brought in here
const productsRoute = require("./routes/products");
app.use(productsRoute(db));
const productsWomens = require("./routes/products_womens");
app.use(productsWomens(db));
const productsMens = require("./routes/products_mens");
app.use(productsMens(db));
const cart = require("./routes/cart");
app.use(cart(db));
const index = require("./routes/index");
app.use(index(db));
const seller = require("./routes/seller");
app.use(seller(db));

//deleting cart items
app.post("/cart/:offerId/delete", (req, res) => {
  const offerId = req.params.offerId;
  let queryString = `DELETE FROM offers WHERE id = $1`;
  return db
    .query(queryString, [offerId])
    .then(() => {
      res.redirect("/cart");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// app.post("/products/:productid/:buyerid", (req, res) => {
//   const addingItems = req.params.offerId;
//   let queryString = `INSERT INTO offers (product_id, buyer_id) VALUES $1, $2`;
//   return db
//     .query(queryString, [addingItems])
//     .then(() => {
//       res.redirect("/cart");
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// });

app.get("/seller", (req, res) => {
  res.render("seller");
});

//port page
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
