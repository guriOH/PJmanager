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