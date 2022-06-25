const product = [];

module.exports = class Product {
  constructor(data) {
    this.title = data;
  }

  save() {
    product.push(this.title);
  }
  getAll() {
    return product;
  }
};
