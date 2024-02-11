const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  booked: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Room', roomSchema);
