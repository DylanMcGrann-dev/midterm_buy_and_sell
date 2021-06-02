const express = require('express');
const router  = express.Router();


module.exports = (db) => {
 router.get("/seller", (req, res) => {
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
        buyerId: 3,
        filter: "seller"
      };
      res.render("seller", templateVar);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
  return router;
};
