// env
require('dotenv').config();

// [LOAD PACKAGE]
const express   = require('express');
const mongoose  = require('mongoose');
const app       = express();
const bodyParser  = require('body-parser');
const cors = require('cors');

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// [CONFIGURE SERVER PORT]
const port = 8080;

const Project = require('./routes/project.routes');


// [ CONFIGURE mongoose ]

// [ CONNECT TO MONGODB SERVER ]
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://admin:admin@localhost:27017/pjmanager');


app.use(cors());
app.use('/project',Project);




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))