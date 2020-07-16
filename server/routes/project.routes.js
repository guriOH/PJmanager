var express = require('express');
var router = express.Router();

var ProjectController = require('../api/project.controllers')

router.get('/:id', ProjectController.getProject);
router.get('/', ProjectController.getProjectList);
router.post('/', ProjectController.createProject);
router.patch('/:id', ProjectController.updateProject);
router.delete('/', ProjectController.deleteProject);

module.exports = router;
