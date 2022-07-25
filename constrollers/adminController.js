const Tovar = require("../module/productModule");
module.exports = {
  getAdminPage: (req, res) => {
    res.render("admin");
  },
  postAdminPage: (req, res) => {
    // const book = new Tovar(req.body.product);
    // book.save();
    res.setHeader("Set-Cookie", "name=aaa;httponly");
    res.redirect("/");
  },
};
