app.get("/offers_cart", (req, res) => {
  const queryParams = [];

  let queryString = `
    SELECT product_id, products.photo_url, products.description, products.price_of_product, products.user_id FROM offers
    JOIN products on product_id = products.id
    WHERE buyer_id = 4`;
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
      };

      res.render("offers_cart", templateVar);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
