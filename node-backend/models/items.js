const mongoose = require('mongoose');

// Define the schema for the items
const itemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  item_name: {
    type: String,
    required: true
  },
  original_price: {
    type: Number,
    required: true
  },
  current_price: {
    type: Number,
    required: true
  },
  discount_percentage: {
    type: Number,
    required: true
  },
  return_period: {
    type: Number,
    required: true
  },
  delivery_date: {
    type: Date,
    required: true
  },
  rating: {
    stars: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  }
});

// Create a model based on the schema
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
