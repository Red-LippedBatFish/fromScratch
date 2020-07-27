const Sequelize = require("sequelize")
const db = require("../config/database")

const Tasks = db.define(
  "tasks",
  {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    project_id: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
)

Tasks.sync({ force: true }).then(() => {
  console.log("Tasks created...")
})
module.exports = Tasks
