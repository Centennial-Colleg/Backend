import User from "../models/user.js";


// ✅ ADD USER
export const addUser = async (req, res) => {
  try {
    const user = new User({
      ...req.body,
      created: new Date(),
      updated: new Date(),
    });

    const savedUser = await user.save();

    const { _id, ...rest } = savedUser._doc;

    res.status(201).json({
      success: true,
      message: "User added successfully.",
      data: {
        ...rest,
        id: _id,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ✅ GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    const formatted = users.map((user) => {
      const { _id, ...rest } = user._doc;
      return {
        ...rest,
        id: _id,
      };
    });

    res.json({
      success: true,
      message: "Users list retrieved successfully.",
      data: formatted,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ✅ GET USER BY ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    const { _id, ...rest } = user._doc;

    res.json({
      success: true,
      message: "User retrieved successfully.",
      data: {
        ...rest,
        id: _id,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ✅ UPDATE USER
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        updated: new Date(),
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.json({
      success: true,
      message: "User updated successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ✅ DELETE USER
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    res.json({
      success: true,
      message: "User deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};