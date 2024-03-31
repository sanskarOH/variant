const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    const { name, description, price } = req.body;
    const newProduct = new Product({ name, description, price });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create product', error });
  }
};
