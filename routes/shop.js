const express = require("express");
const shopController = require("../constrollers/chopController");
const router = express.Router();

router.get("/", shopController);

module.exports = router;
