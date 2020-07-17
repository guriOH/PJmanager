var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  projectName: String,
  category: String,
  description: String,
  date: { type: Date, default: Date.now },
});

projectSchema.static.create = function (payload) {
  const project = new this(payload);

  return project.save();
};

projectSchema.statics.findAll = function () {
  return this.find({});
};

projectSchema.statics.findOneByProjectid = function (projectid) {
  return this.findById({ "_id" : projectid });
};

projectSchema.statics.updateByProjectid = function (projectid, payload) {
  // { new: true }: return the modified document rather than the original. defaults to false
  return this.findByIdAndUpdate({ "_id" : projectid }, payload, { new: true });
};

// Delete by todoid
projectSchema.statics.deleteByProjectid = function (projectid) {
  return this.remove({ "_id" : projectid });
};

module.exports = mongoose.model("project", projectSchema);
