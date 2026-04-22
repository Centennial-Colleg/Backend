import Reference from "../models/reference.js";

export const addReference = async (req, res) => {
  try {
    const reference = new Reference(req.body);
    const savedReference = await reference.save();

    res.status(201).json({
      success: true,
      message: "Reference added successfully.",
      data: {
        ...savedReference._doc,
        id: savedReference._id,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllReferences = async (req, res) => {
  try {
    const references = await Reference.find();

    const formatted = references.map((ref) => ({
      ...ref._doc,
      id: ref._id,
    }));

    res.json({
      success: true,
      message: "References list retrieved successfully.",
      data: formatted,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getReferenceById = async (req, res) => {
  try {
    const reference = await Reference.findById(req.params.id);

    if (!reference) {
      return res.status(404).json({
        success: false,
        message: "Reference not found.",
      });
    }

    res.json({
      success: true,
      message: "Reference retrieved successfully.",
      data: {
        ...reference._doc,
        id: reference._id,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateReference = async (req, res) => {
  try {
    const reference = await Reference.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!reference) {
      return res.status(404).json({
        success: false,
        message: "Reference not found.",
      });
    }

    res.json({
      success: true,
      message: "Reference updated successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteReference = async (req, res) => {
  try {
    const reference = await Reference.findByIdAndDelete(req.params.id);

    if (!reference) {
      return res.status(404).json({
        success: false,
        message: "Reference not found.",
      });
    }

    res.json({
      success: true,
      message: "Reference deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};