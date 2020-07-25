const db = require('../models/taskModels');
const sessionController = {};

// write code here
sessionController.createSession = (req, res, next) => {
  const query = '';

  db.query(query).then(() => {});
};

sessionController.isLoggedIn = (req, res, next) => {
  const query = '';

  db.query(query).then(() => {});
};

module.exports = sessionController;
