const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const productSchema = new Schema({
  title: String,
  price: Number,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Product", productSchema);
