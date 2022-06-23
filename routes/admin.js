const express = require("express");
const path = require("path");

const rootDIr = require("../utils/routPath");
const router = express.Router();

const dataList=[]
router.get("/product-card", (req, res) => {
  res.sendFile(path.join(rootDIr, "view", "admin.html"));
});
router.post("/product-card", (req, res) => {
  dataList.push(req.body.aloha);

  res.redirect("/");
});

module.exports = {router,dataList};
