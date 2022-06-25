const express = require("express");
const path = require("path");

const rootDIr = require("../utils/routPath");
const adminController = require("../constrollers/adminController");
const router = express.Router();

const dataList = [];
router.get("/product-card", adminController.getAdminPage);
router.post("/product-card", adminController.postAdminPage);

module.exports = { router, dataList };
