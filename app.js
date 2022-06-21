const express = require("express");

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded());

const long=[]
app.use("/product-card", (req, res) => {

 res.send('<html><head><title>zdarova</title></head><body><form action="/product" method="post"><input type="text" name="aloha"/>' +
     '<button type="submit">ADD NEW CUSTOMER</button></form></body></html>')
});
app.use('/product',(req,res)=>{
  long.push(req.body.aloha)

  res.redirect('/')
})
app.use("/", (req, res, next) => {
  res.send(`<html><head></head><body><h1>${long.join('')}</h1></body></html>`);
});

app.listen(3000);
