const mongoose = require('mongoose');
const fs = require('fs');
const Product = require('../api/models/product-model');
const { connectDB } = require('../config/db');
require('dotenv').config();

mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.0ivld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => console.log('Conectado a la BD'))
  .catch((err) => console.error('Error conectando a la BD:', err));

const loadSeedData = async () => {
  try {
    const products = JSON.parse(fs.readFileSync('products.json', 'utf-8'));

    if (products.length === 0) {
      console.log('No products to insert');
      process.exit(0);
    }

    await Product.deleteMany();
    console.log('Cleaned database.');

    await Product.insertMany(products);
    console.log('Products inserted.');

    process.exit(0);
  } catch (error) {
    console.error('Error inserting data');
    process.exit(1);
  }
};

loadSeedData();
