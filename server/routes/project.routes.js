var express = require('express');
var router = express.Router();

var ProjectController = require('../api/project.controllers')

router.post('/', ProjectController.createProject);

module.exports = router;
