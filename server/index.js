//! requirements
const express = require('express') // for backend / previous version of JS
const cors = require('cors')
const PORT = process.env.PORT || 8080
const db = require('./database/db')
const {Product, User, Cart} = require('./util/models')
const seed = require("./util/seed")
const {getAllProducts, addToCart, getCart} = require('./controllers/products')

//! middleware
const server = express() // This is all express
server.use(express.json())
server.use(cors())

//! DB Associations
User.hasMany(Cart)
Cart.belongsTo(User)
Product.hasMany(Cart)
Cart.belongsTo(Product)

//! Endpoints
server.get('/api/products', getAllProducts)
server.post('/api/cart', addToCart)
server.get('/api/cart/:userId', getCart)


//! Database Sync & Seed
db
  .sync()
  .then(() => {
    console.log("Success")
    // seed()
  })
  .catch((err) => {
    console.error("Could not connect")
  })

//! Listen Statement
server.listen(PORT, () => console.log(`Up on ${PORT}`))