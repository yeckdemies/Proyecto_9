const Product = require('../models/product-model');
const products = require('../../utils/products.json');

const insertManyProducts = async (req, res, next) => {
  try {
    await Product.insertMany(products);
    return res.status(201).json('All products inserted');
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await Product.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  insertManyProducts,
  getAllProducts
};
