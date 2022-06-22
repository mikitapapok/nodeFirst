const express = require("express");

const path = require("path");

const rootDIr = require("../utils/routPath");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDIr, "view", "shop.html"));
});

module.exports = router;
