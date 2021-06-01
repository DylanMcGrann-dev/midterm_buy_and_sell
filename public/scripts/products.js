app.get("/products", (req, res) => {

  res.render("products",{ filter: "all"});
});

app.get("/products/womens", (req, res) => {

  res.render("products",{filter: 'womens'},);
});

app.get("/products/mens", (req, res) => {

  res.render("products", {filter: "mens"});
});
