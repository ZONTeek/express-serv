const mongoose = require('mongoose');

const studentsSchema = mongoose.Schema({
  students: [],
});
module.exports = mongoose.model("students", studentsSchema);