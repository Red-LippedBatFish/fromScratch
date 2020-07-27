const express = require("express")
const path = require("path")
// const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser")
const userController = require("./controllers/userController.js")
const app = express()
const PORT = 8080
const apiRouter = require("./routes/index")
// Database
const db = require("./config/database")
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.error(err.message))

// Parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Serve the static files from the React app in production mode
// app.use(express.static('dist'));

// ROUTES
app.use("/api", apiRouter)

// Test
app.get("/", (req, res) => res.status(200).send("Responding..."))

// app.get("/page", userController.addUser, (req, res) => {
//   res.status(200).send("hello?")
// })

// respond with main app in production mode
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

//express error handler:  https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: "Express error handler caught unknown middleware error",
//     status: 400,
//     message: { err: "An error occurred" },
//   }
//   const errorObj = Object.assign({}, defaultErr, err)
//   console.log(errorObj.log)
//   return res.status(errorObj.status).json(errorObj.message)
// })
// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404))

// Call Server
app.listen(PORT || 8080, () => console.log(`Listening on ${PORT}`))
