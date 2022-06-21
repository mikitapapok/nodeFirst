const express = require("express");
const path = require("path");
const router = express.Router();
router.get("/product-card", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "view", "admin.html"));
});
router.post("/product-card", (req, res) => {
  console.log(req.body.aloha);

  res.redirect("/");
});

module.exports = router;
