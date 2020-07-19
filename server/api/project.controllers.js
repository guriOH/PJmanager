var ProjectService =require('../services/project.service')

exports.createProject = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
        var project = await ProjectService.createProject(req.body);
        return res.status(200).json({ status: 200, data: project, message: "Succesfully project created" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getProject = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
        var project = await ProjectService.getProject(req.params.projectId);
        return res.status(200).json({ status: 200, project: project, message: "Succesfully get project" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.getProjectList = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
        var projects = await ProjectService.getProjectList(req.query);
        return res.status(200).json({ status: 200, projects: projects, message: "Succesfully get project" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.updateProject = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
        var project = await ProjectService.updateProject(req.params.projectId, req.body);
        return res.status(200).json({ status: 200, data: project, message: "Succesfully get project" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.deleteProject = async function (req, res, next) {
    // Validate request parameters, queries using express-validator
    try {
        await ProjectService.deleteProject(req.params.projectId);
        return res.status(200).json({ status: 200, message: "Succesfully delete project" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}