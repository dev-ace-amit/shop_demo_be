const ProductModel = require("../models/Product");
 
exports.getAllProducts = async () => {
  return await ProductModel.find();
};
 
exports.createProduct = async (prod) => {
  return await ProductModel.create(prod);
};
exports.getProductById = async (id) => {
  return await ProductModel.findById(id);
};
 
exports.updateProduct = async (id, prod) => {
  return await ProductModel.findByIdAndUpdate(id, prod);
};
 
exports.deleteProduct = async (id) => {
  return await ProductModel.findByIdAndDelete(id);
};
