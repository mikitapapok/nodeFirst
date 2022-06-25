const Tovar = require("../module/productModule");
module.exports = {
  getAdminPage: (req, res) => {
    res.render("admin");
  },
  postAdminPage: (req, res) => {
    const book = new Tovar(req.body.product);
    book.save();
    res.redirect("/admin/product-card");
  },
};
