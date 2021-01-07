const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema({
  students: [
    type = Object,
  ],
  date: {
    type: Date,
    default: Date.now(),
  },
  lessonName: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model("Lesson", lessonSchema);