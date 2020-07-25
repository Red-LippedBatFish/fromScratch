const db = require('../models/taskModels');
const taskController = {};

// write code here
taskController.getUsers = (req, res, next) => {
  const query = '';

  db.query(query).then(() => {});
};

module.exports = taskController;
