const Sequelize = require("sequelize")
const db = require("../config/database")
// const MiniTasks = require("./MiniTasks")

const Ship = db.define("ship", {
  name: {
    type: Sequelize.STRING,
  },
})

const Captain = db.define("captain", {
  name: {
    type: Sequelize.STRING,
  },
})

Captain.hasOne(Ship)
Ship.belongsTo(Captain)

// Ship.sync().then(() => {
//   console.log("Projects created...")
// })
Captain.sync().then(() => console.log("captain sync"))
Ship.sync().then(() => console.log("ship sync"))

module.exports = {
  Ship,
  Captain,
}
