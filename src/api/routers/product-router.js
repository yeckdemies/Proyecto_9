const {
  insertManyProducts,
  getAllProducts
} = require('../controllers/product-controller');

const productsRouter = require('express').Router();

productsRouter.post('/createProducts', insertManyProducts);
productsRouter.get('/', getAllProducts);

module.exports = productsRouter;
