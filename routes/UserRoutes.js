const express = require("express");
const {
  loginUser
} = require("../controllers/UserController");
 
const router = express.Router();
 
router.route("/").post(loginUser);
 
module.exports = router;
