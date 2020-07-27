const express = require("express")
const router = express.Router()
const db = require("../config/database")
const Tasks = require("../models/Tasks")
const Sequilize = require("sequelize")
const Projects = require("../models/Projects")

// Get all tasks
router.get("/projects", (req, res) =>
  Projects.findAll()
    .then((tasks) => {
      console.log("Tasks:", tasks)
      res.send(tasks)
    })
    .catch((err) => console.error(err.message))
)

// add tasks
router.post("/projects", (req, res) => {
  let { title } = req.body
  Projects.create({
    title,
  })
    .then((proj) => console.log(proj))
    .then(res.send("Successful!"))
    .catch((err) => console.error(err.message))
})

// delete tasks
router.delete("/projects/:title", (req, res) => {
  let { title } = req.params
  Projects.destroy({
    where: {
      title: title,
    },
  }).then(() => console.log("destroyed..."))
})

// update tasks
router.put("/projects/:title/:data", (req, res) => {
  let { title, data } = req.body
  Projects.update(
    { title: data },
    {
      where: {
        title,
      },
    }
  ).then(() => console.log("updated!"))
})

module.exports = router
