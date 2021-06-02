const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/products", (req, res) => {
    const queryParams = [];

    let queryString = `
      SELECT products.id, products.photo_url, products.price_of_product, products.description, users.name as userName
      FROM products
      JOIN users ON users.id = user_id
      GROUP BY products.id, users.id `;

    const priceFilter = req.query.pricefilter;

    if (priceFilter) {
      queryString += priceFilter === "asc" ? `ORDER BY price_of_product ASC` : `ORDER BY price_of_product DESC`;
    }

    return db
      .query(queryString, queryParams)
      .then((data) => {

        const products = data.rows;
        const templetvar = {
          filter: "all",
          items: products,
          buyerId: 3
        };
        res.render("products", templetvar);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
