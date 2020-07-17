var express = require('express');
var router = express.Router();

var ProjectController = require('../api/project.controllers')

router.get('/:projectId', ProjectController.getProject);
router.get('/', ProjectController.getProjectList);
router.post('/', ProjectController.createProject);
router.put('/:projectId', ProjectController.updateProject);
router.delete('/:projectId', ProjectController.deleteProject);

module.exports = router;
