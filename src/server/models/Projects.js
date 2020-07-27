const Sequelize = require("sequelize")
const db = require("../config/database")

const Projects = db.define("projects", {
  title: {
    type: Sequelize.STRING,
  },
})

Projects.sync().then(() => {
  console.log("Projects created...")
})

module.exports = Projects
