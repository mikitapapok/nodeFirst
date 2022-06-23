const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const productArray = [];

app.use(bodyParser.urlencoded());

app.use("/admin", adminRouter.router);
app.use(shopRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "view", "notFound.html"));
});
app.listen(3000);
