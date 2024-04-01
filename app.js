const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Prouter = require('./routes/productRoutes');
const Vrouter = require('./routes/variantRoutes');
require('dotenv').config();


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/api', Prouter);
app.use('/api', Vrouter);

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});
