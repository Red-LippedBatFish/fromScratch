const db = require('../models/taskModels');
const cookieController = {};

// write code here
cookieController.setCookie = (req, res, next) => {
  const query = '';

  db.query(query).then(() => {});
};

module.exports = cookieController;
