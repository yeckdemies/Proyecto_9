const Product = require('../models/product-model');
const loadProductsFromFile = require('../../utils/loadFileProducts');

const insertManyProducts = async (req, res, next) => {
  try {
    const filePath = '../../utils/products.json';
    const products = loadProductsFromFile(filePath);

    if (products.length === 0) {
      return res.status(400).json('No products to insert');
    }
    await Product.deleteMany();
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
