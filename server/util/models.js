const {DataTypes} = require('sequelize')
const db = require('../database/db')

const Product = db.define('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  price: DataTypes.FLOAT
})

const User = db.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  username: DataTypes.STRING({length: 20}),
  password: DataTypes.STRING
})

const Cart = db.define("cart", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  }
})

module.exports = {Product, User, Cart}