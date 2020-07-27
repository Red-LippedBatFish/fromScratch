const Sequelize = require("sequelize")
const db = require("../config/database")

const Tasks = db.define("tasks", {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
})

Tasks.sync().then(() => {
  console.log("Tasks created...")
})
module.exports = Tasks
