const express = require('express');
const router  = express.Router();

// 1 logged in user id is 1 filter out user id 1 in proudct
// add dynamic filter in query filter by categroy if (category ) add where else nothing


module.exports = (db, userId) => {
  router.get("/", (req, res) => {
    const queryParams = [];

    let queryString = `
      SELECT *
      FROM products
      WHERE user_id != ${userId} `;
    if (req.query.category) {
      const categoryString = req.query.category;
      const stringSplit = categoryString.split(',');
      let inQuery = '';
      stringSplit.forEach((elm, index) => {
        queryParams.push(elm);
        inQuery += `$${queryParams.length},`;
        if (index === stringSplit.length - 1) {
          inQuery = inQuery.substring(0, inQuery.length - 1);
        }
      });
      queryString += `AND category IN (${inQuery}) `;
    }
    return db.query(queryString, queryParams)
      .then(data => {
        const products = data.rows;
        res.json({ products });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};