const getDb = require("../utils/database").getDb;

module.exports = class Product {
  constructor(data) {
    this.title = data;
  }

  save() {
    const db = getDb();
    return db
      .collection("product")
      .insertOne(this.title)
      .then((result) => console.log(result));
  }
};
