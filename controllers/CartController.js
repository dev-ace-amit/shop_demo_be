const cartService = require("../services/CartService");
 
exports.getAllCartOfUser = async (req, res) => {
  try {
    const cartData = await cartService.getAllCartOfUser(req.params.id);
    res.json({ data: cartData, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createCart = async (req, res) => {
  try {
    const cart = await cartService.createCart(req.body);
    res.json({ data: cart, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getCartById = async (req, res) => {
  try {
    const cart = await cartService.getCartById(req.params.id);
    res.json({ data: cart, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateCart = async (req, res) => {
  try {
    const cart = await cartService.updateCart(req.params.id, req.body);
    res.json({ data: cart, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteCart = async (req, res) => {
  try {
    const cart = await cartService.deleteCart(req.params.id);
    res.json({ data: cart, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
