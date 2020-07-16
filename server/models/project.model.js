var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema(
    {
        projectName: String,
        category: String,
        description: String,
        date: { type: Date, default: Date.now }
    }
)

module.exports = mongoose.model("project", projectSchema);