const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/seller", (req, res) => {
    const queryParams = [];

    let queryString = `
    SELECT products.id, products.photo_url, products.gender, products.size, products.category, products.description, products.price_of_product, products.sold_date as sold_date
    FROM products
    JOIN users ON users.id = user_id
    WHERE users.id = 1
    `;

    return db
      .query(queryString, queryParams)
      .then((data) => {
        const products = data.rows;
        const templateVar = {
          items: products,
          filter: "active",
          userId: 1
        };
        res.render("seller", templateVar);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
