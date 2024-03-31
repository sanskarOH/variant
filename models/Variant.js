const mongoose = require('mongoose');

const VariantSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  attribute: { type: String, required: true },
  value: { type: String, required: true },
});

module.exports = mongoose.model('Variant', VariantSchema);
