const express = require("express");

const adminController = require("../constrollers/adminController");
const router = express.Router();

const dataList = [];
router.get("/product-card", adminController.getAdminPage);
router.post("/product-card", adminController.postAdminPage);

module.exports = { router, dataList };
