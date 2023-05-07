const express = require("express");
const {
  getAllCartOfUser,
  createCart,
  getCartById,
  updateCart,
  deleteCart,
} = require("../controllers/CartController");
 
const router = express.Router();
 
router.route("/").post(createCart);
router.route("/:id").get(getAllCartOfUser).get(getCartById).put(updateCart).delete(deleteCart);
 
module.exports = router;
