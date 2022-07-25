const Tovar = require("../module/productModule");

module.exports = (req, res) => {
  const cook = req.get("Cookie");
  console.log(cook);
  res.render("shop");
};
