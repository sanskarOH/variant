const Variant = require('../models/Variant');

exports.createVariant = async (req, res) => {
  try {
    const { productId, attribute, value } = req.body;
    const newVariant = new Variant({ productId, attribute, value });
    await newVariant.save();
    res.status(201).json(newVariant);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create variant', error });
  }
};
