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

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
const products = require("./routes/products");
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

//add to favorites from all products page
app.post("/products/:buyerid/:productid", (req, res) => {
  const addingItems = req.params.buyerid;
  const addingItems2 = req.params.productid;

  let queryString = `INSERT INTO offers (buyer_id, product_id) VALUES ($1, $2)`;
  return db
    .query(queryString, [addingItems, addingItems2])
    .then(() => {
      res.redirect("/products");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// add to favorites from mens page
app.post("/products/mens/:buyerid/:productid", (req, res) => {
  const addingItems = req.params.buyerid;
  const addingItems2 = req.params.productid;

  let queryString = `INSERT INTO offers (buyer_id, product_id) VALUES ($1, $2)`;
  return db
    .query(queryString, [addingItems, addingItems2])
    .then(() => {
      res.redirect("/products/mens");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.post("/products/:buyerid/:productid/email", (req, res) => {
  const buyerId = req.params.buyerid;
  const productId = req.params.productid;

  let queryString = `SELECT (users.email) AS sellerEmail,
  (SELECT users.email AS buyerEmail FROM users WHERE users.id = $1)
  FROM products JOIN users ON user_id = users.id
  WHERE products.id = $2 ;
  `;
  return db
    .query(queryString, [buyerId, productId])
    .then((response) => {
      const { selleremail, buyeremail } = response.rows[0];
      const msg = {
        to: buyeremail,
        from: selleremail,
        subject: `product enquiry: product ID[${productId}]`,
        text: req.body["email-body"],
      };

      sgMail
        .send(msg)
        .then((response) => {
          console.log(response[0].statusCode);
          console.log(response[0].headers);
          res.redirect("/products");
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: err.message });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//add to favorites page from products/womens
app.post("/products/womens/:buyerid/:productid", (req, res) => {
  const addingItems = req.params.buyerid;
  const addingItems2 = req.params.productid;

  let queryString = `INSERT INTO offers (buyer_id, product_id) VALUES ($1, $2)`;
  return db
    .query(queryString, [addingItems, addingItems2])
    .then(() => {
      res.redirect("/products/womens");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.post("/seller/:productid", (req, res) => {
  const dateInNano = new Date();
  const year = dateInNano.getFullYear();
  const month = dateInNano.getMonth();
  const day = dateInNano.getDay();
  const today = year + "-" + month + "-" + day;
  const id = req.params.productid;

  let queryString = `UPDATE products SET sold_date = CAST('${today}' AS DATE) WHERE id = ${id}`;

  return db
    .query(queryString)

    .then(() => {
      console.log("response", res);
      res.redirect("/seller");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
});

//Delete Currently Listed Items
app.post("/seller/delete/:productId", (req, res) => {
  const productId = req.params.productId;
  let queryString = `DELETE FROM products WHERE id = $1`;
  return db
    .query(queryString, [productId])
    .then(() => {
      res.redirect("/seller");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//Create a New Listing
app.post("/seller/new/", (req, res) => {
  const addingItem1 = req.params.buyerid;
  const addingItem2 = req.params.productid;

  let queryString = `INSERT INTO products (buyer_id, product_id) VALUES ($1, $2)`;
  return db
    .query(queryString, [addingItem1, addingItem2])
    .then(() => {
      res.redirect("/seller");
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

//port page
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
