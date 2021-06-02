const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/products/womens", (req, res) => {
    const queryParams = [];

    let queryString = `
      SELECT *, users.name as userName
      FROM products
      JOIN users ON users.id = user_id
      WHERE gender = 'women'
      GROUP BY products.id, users.id `;

    const priceFilter = req.query.pricefilter;

    if (priceFilter) {
      queryString += priceFilter === 'asc' ? `ORDER BY price_of_product ASC` : `ORDER BY price_of_product DESC`;
    }

    return db
      .query(queryString, queryParams)
      .then((data) => {
        const products = data.rows;
        console.log(products);
        const templetvar = {
          filter: 'womens',
          items: products,
        };
        res.render("products", templetvar);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
