import Service from "../models/service.js";


// ✅ ADD SERVICE
export const addService = async (req, res) => {
  try {
    const service = new Service(req.body);
    const savedService = await service.save();

    const { _id, ...rest } = savedService._doc;

    res.status(201).json({
      success: true,
      message: "Service added successfully.",
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


// ✅ GET ALL SERVICES
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();

    const formatted = services.map((service) => {
      const { _id, ...rest } = service._doc;
      return {
        ...rest,
        id: _id,
      };
    });

    res.json({
      success: true,
      message: "Services list retrieved successfully.",
      data: formatted,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ✅ GET SERVICE BY ID
export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found.",
      });
    }

    const { _id, ...rest } = service._doc;

    res.json({
      success: true,
      message: "Service retrieved successfully.",
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


// ✅ UPDATE SERVICE
export const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found.",
      });
    }

    res.json({
      success: true,
      message: "Service updated successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ✅ DELETE SERVICE
export const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found.",
      });
    }

    res.json({
      success: true,
      message: "Service deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};