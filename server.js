// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/browser");
const widgetsRoutes = require("./routes/offer_cart");
const productsRoutes = require('./routes/products');

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

//display offer cart page
app.get("/offers_cart", (req, res) => {
  const templetbar = {
    offers: [
      {
        photo_url: 'https://cdn.shopify.com/s/files/1/0932/1356/products/Mar25-2021-Ecomm-Monica-24_800x.jpg?v=1619108093',
        user_id: 'asdf1111',
        description: 'Terry Cropped Hoodie in Moss',
        current_status: 'pending'
      },
      {
        photo_url: 'https://cdn.shopify.com/s/files/1/0932/1356/products/Mar25-2021-Ecomm-Monica-11_800x.jpg?v=1619107106',
        user_id: 'uuuu9999',
        description: 'Terry Hoodie in Taupe',
        current_status: 'approved'
      },
      {
        photo_url: 'https://i0.codibook.net/files/1978110564211/65007ca57157126b/2095991763.jpg',
        user_id: 'oioi333',
        description: 'Someday Part 9 Cotton Pants',
        current_status: 'decliend'
      }
    ]
  };
  res.render("offers_cart", templetbar);
});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
