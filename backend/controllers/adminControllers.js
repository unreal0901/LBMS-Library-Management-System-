const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");

const registerAdmin = asyncHandler(async (req, res) => {
  const { adminId, password } = req.body;
  const adminExists = await Admin.findOne({ adminId });
  if (adminExists) {
    res.status(400);
    throw new Error("Admin already exists");
  }

  const admin = await Admin.create({ adminId, password });
  if (admin) {
    res.status(201).json({
      _id: admin._id,
      adminId: admin.adminId,
      password: admin.password,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!!");
  }
});

module.exports = { registerAdmin };
