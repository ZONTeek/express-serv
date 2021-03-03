const mongoose = require('mongoose');

const daySchema = mongoose.Schema({
  students: [
    type = Object,
  ],
  date: {
    type: String,
  }
});
module.exports = mongoose.model("day", daySchema);