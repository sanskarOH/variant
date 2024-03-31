const express = require('express');
const { createVariant } = require('../controllers/VariantController');

const router = express.Router();

router.post('/variants', createVariant);

module.exports = router;
