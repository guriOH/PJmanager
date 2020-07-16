var project = require("../models/project.model");

exports.createProject = async function (body) {
  try {
    var projectModel = new project();
    projectModel.projectName = body.projectName;
    projectModel.category = body.category;
    projectModel.description = body.description;
    projectModel
      .save()
      .then((newPost) => {
        console.log("Create 완료");
      })
  } catch (e) {
    // Log Errors
    throw Error("Error while Paginating Users");
  }
};
