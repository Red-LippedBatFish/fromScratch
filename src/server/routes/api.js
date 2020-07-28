const express = require("express")
const router = express.Router()
const db = require("../config/database")
const MiniTasks = require("../models/MiniTasks")

const Tasks = require("../models/Tasks")
const Sequilize = require("sequelize")
const Projects = require("../models/Projects")
// const oneToMany = require("../models/oneToMany")

// Get all projects
router.get("/", (req, res) =>
  Projects.findAll()
    .then((project) => {
      console.log("Tasks:", project)
      res.send(project)
    })
    .catch((err) => console.error(err.message))
)

//Get tasks for a specific project
router.get("/:id", (req, res) => {
  const id = req.params.id.toString();
  Tasks.findAll({
    where: {
      project_id: id,
    },
  })
    .then((tasks) => {
      res.json(tasks)
    })
    .catch((err) => console.error(err.message))
})

//Get MINItasks for a specific project
router.get("/task/:id", (req, res) => {
  const { id } = req.params
  MiniTasks.findAll({
    where: {
      task_id: id,
    },
  })
    .then((miniTasks) => {
      console.log("MiniTasks:", miniTasks)
      res.json(miniTasks)
    })
    .catch((err) => console.error(err.message))
})

// delete project
router.delete("/projects/:id", (req, res) => {
  const { id } = req.params
  pid = Number(id)
  //get project id and store it in local var
  Tasks.destroy({
    where: {
      project_id: id,
    },
  })
    .then(() => {
      Projects.destroy({
        where: {
          id: pid,
        },
      })
    })
    .then(() => {
      res.redirect('/')
    })
    .catch((err) => console.error(err))
})

//remove a task
router.delete("/tasks/:id", (req, res) => {
  const { id } = req.params
  tid = Number(id)

  MiniTasks.destroy({
    where: {
      task_id: id,
    },
  })
    .then(() => {
      Tasks.destroy({
        where: {
          id: tid,
        },
      })
    })
    .then(() => {
      res.status(200).send("Destroyed!")
    })
    .catch((err) => console.error(err))
})

//add Project
router.post("/projects", (req, res) => {
  const { title, description } = req.body
  Projects.create({
    title,
    description,
  })
    .then((proj) => console.log(proj))
    .then(res.send("Successful!"))
    .catch((err) => console.error(err.message))
})

// add tasks
router.post("/tasks/:id", (req, res) => {
  let { title, description } = req.body
  let { id } = req.params
  Tasks.create({
    title,
    description,
    project_id: id,
  })
    .then((proj) => console.log(proj))
    .then(res.send("Successful!"))
    .catch((err) => console.error(err.message))
})

//add MINItask
router.post("/minitasks/:id", (req, res) => {
  let { title, description } = req.body
  let { id } = req.params
  MiniTasks.create({
    title,
    description,
    task_id: id,
  })
    .then((proj) => console.log(proj))
    .then(res.send("Successful!"))
    .catch((err) => console.error(err.message))
})

// update tasks
// router.put("/projects/:title/:data", (req, res) => {
//   let { title, data } = req.body
//   Projects.update(
//     { title: data },
//     {
//       where: {
//         title,
//       },
//     }
//   ).then(() => console.log("updated!"))
// });

module.exports = router
