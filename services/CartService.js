const CartModel = require("../models/Cart");
 
exports.getAllCartOfUser = async (id) => {
  return await CartModel.find({"userId": id});
};
 
exports.createCart = async (cart) => {
  return await CartModel.create(cart);
};
exports.getCartById = async (id) => {
  return await CartModel.findById(id);
};
 
exports.updateCart = async (id, cart) => {
  return await CartModel.findByIdAndUpdate(id, cart);
};
 
exports.deleteCart = async (id) => {
  return await CartModel.findByIdAndDelete(id);
};
