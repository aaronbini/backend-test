const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Image = new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  caption: {
    type: String
  }
}, {
  timestamps: true
} );

module.exports = mongoose.model('Image', Image);
