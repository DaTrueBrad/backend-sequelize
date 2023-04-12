const {Sequelize} = require('sequelize')
require('dotenv').config()
const {DATABASE_URL} = process.env

const db = new Sequelize(
  DATABASE_URL,
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
)

module.exports = db