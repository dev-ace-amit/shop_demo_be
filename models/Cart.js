const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const cartSchema = new Schema({
  productId: String,
  userId: String,
  title: String,
  quantity: Number,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Cart", cartSchema);
