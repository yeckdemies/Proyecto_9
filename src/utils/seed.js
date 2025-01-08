const mongoose = require('mongoose');
const fs = require('fs');
const Product = require('../api/models/product-model');
const { connectDB } = require('../config/db');
require('dotenv').config();
const loadProductsFromFile = require('./loadFileProducts');

mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.0ivld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => console.log('Conectado a la BD'))
  .catch((err) => console.error('Error conectando a la BD:', err));

const loadSeedData = async () => {
  try {
    const filePath = './products.json';
    const products = loadProductsFromFile(filePath);

    if (products.length === 0) {
      return res.status(400).json('No products to insert');
    }

    await Product.deleteMany();
    console.log('Cleaned collection.');

    await Product.insertMany(products);
    console.log('All products inserted.');

    process.exit(0);
  } catch (error) {
    console.error('Error inserting products');
    process.exit(1);
  }
};

loadSeedData();
