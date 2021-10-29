const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String },
    income: { type: Number },
    expences: { type: Number },
    assets: { type: String },
    liabilites: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
