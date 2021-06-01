app.get("/products", (req, res) => {
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

app.get("/products/womens", (req, res) => {
  const queryParams = [];

  let queryString = `
    SELECT *, users.name as userName
    FROM products
    JOIN users ON users.id = user_id
    WHERE gender = 'women'
    LIMIT 3`;

  return db
    .query(queryString, queryParams)
    .then((data) => {
      const products = data.rows;
      const templetvar = {
        filter: 'womens',
        items: products
      };
      res.render("products", templetvar);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

app.get("/products/mens", (req, res) => {
  const queryParams = [];

  let queryString = `
    SELECT *, users.name as userName
    FROM products
    JOIN users ON users.id = user_id
    WHERE gender = 'men'
    LIMIT 3`;

  return db
    .query(queryString, queryParams)
    .then((data) => {
      const products = data.rows;
      const templetvar = {
        filter: 'mens',
        items: products
      };
      res.render("products", templetvar);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
