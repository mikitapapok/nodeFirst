const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const app = express();
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(bodyParser.urlencoded());
app.engine("hbs", expressHbs.engine());
app.set("view engine", "hbs");
app.set("views", "view");
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRouter.router);
app.use(shopRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "view", "notFound.html"));
});
app.listen(3000);
