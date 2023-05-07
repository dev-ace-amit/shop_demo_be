const userService = require("../services/UserService");
const cartService = require("../services/CartService");

exports.loginUser = async (req, res) => {
  try {
    const userData = await userService.loginUser(req.body.email, req.body.password);
    const cartData = await cartService.getAllCartOfUser(userData._id);
    res.json({ data: userData, cartData:cartData, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
