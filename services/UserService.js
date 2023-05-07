const UserModel = require("../models/User");
 
exports.loginUser = async (email, password) => {
  return await UserModel.findOne({"email": email, "password": password});
};
