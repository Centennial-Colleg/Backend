import Project from "../models/project.js";


// ✅ ADD PROJECT
export const addProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    const savedProject = await project.save();

    const { _id, ...rest } = savedProject._doc;

    res.status(201).json({
      success: true,
      message: "Project added successfully.",
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


// ✅ GET ALL PROJECTS
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    const formatted = projects.map((proj) => {
      const { _id, ...rest } = proj._doc;
      return {
        ...rest,
        id: _id,
      };
    });

    res.json({
      success: true,
      message: "Projects list retrieved successfully.",
      data: formatted,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ✅ GET PROJECT BY ID
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    const { _id, ...rest } = project._doc;

    res.json({
      success: true,
      message: "Project retrieved successfully.",
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


// ✅ UPDATE PROJECT
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    res.json({
      success: true,
      message: "Project updated successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ✅ DELETE PROJECT
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found.",
      });
    }

    res.json({
      success: true,
      message: "Project deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};