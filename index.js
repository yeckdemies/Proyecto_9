require('dotenv').config();
const { connectDB } = require('./src/config/db');
const express = require('express');
const productsRouter = require('./src/api/routers/product-router');

const app = express();
connectDB();

app.use('/api/v1/products', productsRouter);

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found');
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
