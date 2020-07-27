const Sequelize = require("sequelize")
// const dotenv = require("dotenv")

// dotenv.config()

module.exports = new Sequelize(
  "postgres://hudpsnyd:FSIaGHqKct-GrQurZzL55Mn2uZF5EbIU@ruby.db.elephantsql.com:5432/hudpsnyd",
  {
    // host: "localhost",
    dialect: "postgres",
    operatorsAliases: 0,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
)

// from the older version
// const sequelize = new Sequelize(
//   "postgres://hudpsnyd:FSIaGHqKct-GrQurZzL55Mn2uZF5EbIU@ruby.db.elephantsql.com:5432/hudpsnyd",
//   {
//     logging: (...msg) => console.log(msg),
//     dialect: "postgres",
//     define: {
//       freezeTableName: true,
//       timestamps: false,
//     },
//   }
// )
