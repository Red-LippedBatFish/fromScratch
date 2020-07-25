const { Sequelize, Model, DataTypes } = require('sequelize');
// const { DELETE } = require('sequelize/types/lib/query-types');

//connection string is for elephantSQL database "fromScratch"
const sequelize = new Sequelize(
  'postgres://hudpsnyd:FSIaGHqKct-GrQurZzL55Mn2uZF5EbIU@ruby.db.elephantsql.com:5432/hudpsnyd',
  {
    logging: (...msg) => console.log(msg),
    dialect: 'postgres',
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  }
);

/**
 * ************************************
 *
 * to access database from terminal type in:
 *  psql <postgres://hudpsnyd:FSIaGHqKct-GrQurZzL55Mn2uZF5EbIU@ruby.db.elephantsql.com:5432/hudpsnyd>
 *
 * \d             to see tables
 * \d TABLE_NAME  to see specific table
 * \q             to quit
 * \?             list of commands
 *
 * sql query cheat sheet: http://www.cheat-sheets.org/saved-copy/sqlcheetsheet.gif
 * ************************************
 */

//test connection
const connect = (async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

//create Model (which is a table)
// const user = (sequelize, DataTypes) => {
const Users = sequelize.define(
  'user',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }
  // {
  //   // Other model options go here
  // });
);

// return Users;
// };

//adding table to our database
// Users.sync().then(console.log('table created!'));

// //save data to Users table
// const newData = User.create({
//   firstName: 'a',
//   lastName: 'a',
//   username: 'a',
//   password: 'a',
// }).then(console.log(newData.toJSON()));

// //to UPDATE
// // call save() method on data instance with new info
// newData.password = '';
// newData.save().then(console.log(newData.toJSON()));

// //to RELOAD = get fresh/changed data from database
// newData.reload().then(console.log(newData.password));

// // to DELETE
// //call destroy method on data instance
// newData.destroy().then(console.log(`user deleted`));

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database

// module.exports = {
//   query: (text, params, callback) => {
//     // console.log("executed query", text);
//     return pool.query(text, params, callback);
//   },
// };

module.exports = Users;
