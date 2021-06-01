const express = require('express');
const router = express.Router();


module.exports = (db) => {

  router.get("/products", (req, res) => {
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
  return router;
};
