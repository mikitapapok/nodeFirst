const express = require("express");

const path = require("path");

const rootDIr = require("../utils/routPath");
const adminRouter = require("./admin");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("data from admin", adminRouter.dataList.join(""));
  res.sendFile(path.join(rootDIr, "view", "shop.html"));
});

module.exports = router;
