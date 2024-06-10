const mongoose = require('mongoose');

const uniqueItemSchema = new mongoose.Schema({
  collection: String,
  category: String,
  name: String,
  price: Number,
  image: String
});

module.exports = mongoose.model('Item', uniqueItemSchema);
