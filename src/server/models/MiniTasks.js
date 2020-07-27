const Sequelize = require("sequelize")
const db = require("../config/database")

const MiniTasks = db.define("minitasks", {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  // project_id: {
  //   type: Sequelize.STRING,
  // },
  task_id: {
    type: Sequelize.STRING,
  },
})

MiniTasks.sync().then(() => {
  console.log("Minitasks created...")
})
module.exports = MiniTasks
