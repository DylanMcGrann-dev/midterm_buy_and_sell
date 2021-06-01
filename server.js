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

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/browser");
const widgetsRoutes = require("./routes/offer_cart");
const productsRoutes = require("./routes/products");
const sellerRoutes = require("./routes/seller");
const seller = require("./routes/seller");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/browser", usersRoutes(db));
app.use("/api/offer_cart", widgetsRoutes(db));
app.use("/api/products", productsRoutes(db, 3));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});

//will move later to own file but for now this is the products route
app.get("/products", (req, res) => {
  const queryParams = [];

  let queryString = `
    SELECT *, users.name as userName
    FROM products
    JOIN users ON users.id = user_id
    LIMIT 3`;

  return db
    .query(queryString, queryParams)
    .then((data) => {
      const products = data.rows;
      const templetvar = {
        filter: 'all',
        items: products
      };
      res.render("products", templetvar);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.get("/products/womens", (req, res) => {
  const queryParams = [];

  let queryString = `
    SELECT *, users.name as userName
    FROM products
    JOIN users ON users.id = user_id
    WHERE gender = 'women'
    LIMIT 3`;

  return db
    .query(queryString, queryParams)
    .then((data) => {
      const products = data.rows;
      const templetvar = {
        filter: 'womens',
        items: products
      };
      res.render("products", templetvar);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.get("/products/mens", (req, res) => {
  const queryParams = [];

  let queryString = `
    SELECT *, users.name as userName
    FROM products
    JOIN users ON users.id = user_id
    WHERE gender = 'men'
    LIMIT 3`;

  return db
    .query(queryString, queryParams)
    .then((data) => {
      const products = data.rows;
      const templetvar = {
        filter: 'mens',
        items: products
      };
      res.render("products", templetvar);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//display offer cart page
app.get("/offers_cart", (req, res) => {
  const queryParams = [];

  let queryString = `
    SELECT product_id, products.photo_url, products.description, products.price_of_product, products.user_id FROM offers
    JOIN products on product_id = products.id
    WHERE buyer_id = 4`;
  return db
    .query(queryString, queryParams)
    .then((data) => {
      const products = data.rows;
      let totalPrice = data.rows.reduce(
        (total, product) => (total += product.price_of_product),
        0
      );
      const templateVar = {
        offers: products,
        totalPrice,
      };

      res.render("offers_cart", templateVar);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.get("/seller", (req, res) => {
  const queryParams = [];

  let queryString = `
    SELECT *
    FROM products
    JOIN users ON users.id = user_id
    WHERE users.id = '1'
    `;

  return db
    .query(queryString, queryParams)
    .then((data) => {
      const products = data.rows;
      const templateVar = {
        items: products,
        filter: 'seller',
      };
      res.render("seller", templateVar);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
