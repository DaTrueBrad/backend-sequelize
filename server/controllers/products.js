const {Product, Cart, User} = require('../util/models')

module.exports = {
  getAllProducts: async (req, res) => {
    const products = await Product.findAll()
    res.status(200).send(products)
  },
  addToCart: async (req, res) => {
    const {productId, userId} = req.body
    await Cart.create({productId, userId})
    res.status(200).send("Added to Cart")
  },
  getCart: async (req, res) => {
    const {userId} = req.params
    const cart = await Cart.findAll({
      where: {userId},
      include: [
        Product,
        {
          model: User,
          attributes: ["username"]
        }
      ]
    })
    res.status(200).send(cart)
  }
}