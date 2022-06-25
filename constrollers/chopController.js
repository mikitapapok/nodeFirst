const Tovar = require("../module/productModule");

module.exports = (req, res) => {
  const a = new Tovar();
  res.render("shop", { books: a.getAll() });
};
