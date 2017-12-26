const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  pikaKufitare: String,
  hyrjeMinMinuta: Number,
  hyrjeMaxMinuta: Number,
  daljeMinMinuta: Number,
  daljeMaxMinuta: Number,
  hyrjeMinMetra: Number,
  hyrjeMaxMetra: Number,
  daljeMinMetra: Number,
  daljeMaxMetra: Number,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Data", DataSchema);
