const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: String,
  complited: Boolean,
});

module.exports = mongoose.model('Task', TaskSchema);
