const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get("/cart", (req, res) => {
    const queryParams = [];

    let queryString = `
      SELECT offers.id, product_id, products.photo_url, products.description, products.price_of_product, users.name FROM offers
      JOIN products on product_id = products.id
      JOIN users ON user_id = users.id
      WHERE buyer_id = 3`;
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
          buyerId: 3
        };

        res.render("offers_cart", templateVar);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
