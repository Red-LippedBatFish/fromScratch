/**
 * ************************************
 *
 * @module  Index
 * @description   Home base for express server. Contains paths to routers,
 * serves static files, and responses will be sent from here
 *
 * ************************************
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userController = require('./controllers/userController.js');

const app = express();
const PORT = 8080;

//handle parsing request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve the static files from the React app in production mode
// app.use(express.static('dist'));

app.get('/page', userController.addUser, (req, res) => {
  res.status(200).send('hello?');
});

// respond with main app in production mode
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

//express error handler:  https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT || 8080, () => console.log(`Listening on ${PORT}`));
