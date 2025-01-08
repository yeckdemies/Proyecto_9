const fs = require('fs');

const loadProductsFromFile = (filePath) => {
  let products = [];
  try {
    if (fs.existsSync(filePath)) {
      products = require(filePath);
    } else {
      console.warn(`The file ${filePath} does not exist.`);
    }
  } catch (error) {
    console.error(`Error loading products from file: ${error}`);
  }
  return products;
};

module.exports = loadProductsFromFile;
