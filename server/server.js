const express = require('express');
const app = express();
const projectController = require('./api/projectController');
const cors = require('cors');

app.use(cors());
app.use('/project',projectController);

const port = 3002;

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))