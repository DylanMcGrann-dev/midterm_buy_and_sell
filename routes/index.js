const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const queryParams = [];

    let queryString = `
      SELECT *, photo_url as photo
      FROM products
      LIMIT 5;
      `;
    return db
      .query(queryString, queryParams)
      .then((data) => {
        const products = data.rows;
        const templetvar = {
          items: products
        };
        res.render("index",templetvar);
      })
      .catch((err) => {
        res.status(500).json({error: err.message});
      })
  });
  return router;
}
