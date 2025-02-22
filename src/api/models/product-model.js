const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: false }
  },
  {
    timestamps: true,
    collection: 'products'
  }
);

const Product = mongoose.model('products', productSchema, 'products');
module.exports = Product;
