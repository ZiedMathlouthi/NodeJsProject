const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  nom: String,
  mat: String,
  status: Boolean,
  NumTel: Number,
});

module.exports = mongoose.model("students", studentSchema);
