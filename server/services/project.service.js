var Project = require("../models/project.model");

exports.createProject = async function (body) {
  try {
    var projectModel = new Project();
    projectModel.projectName = body.projectName;
    projectModel.category = body.category;
    projectModel.description = body.description;
    projectModel
      .save()
      .then((newPost) => {
        console.log("Create 완료 :" + newPost);
      })
    return projectModel
  } catch (e) {
    // Log Errors
    throw Error("Error while Paginating Users");
  }
};


exports.getProjectList = async function () {
  try {
    console.log("getProjectList")
    return Project.findAll();
  } catch (e) {
    // Log Errors
    throw Error(e);
  }
};

exports.getProject = async function (projectId) {
  try {
    return Project.findOneByProjectid(projectId);
  } catch (e) {
    // Log Errors
    throw Error(e);
  }
};

exports.updateProject = async function (projectId, payload) {
  try {
    return Project.updateByProjectid(projectId, payload);
  } catch (e) {
    // Log Errors
    throw Error(e);
  }
};

exports.deleteProject = async function (projectId) {
  try {
    return Project.deleteByProjectid(projectId);
  } catch (e) {
    // Log Errors
    throw Error(e);
  }
};