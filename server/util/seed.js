const {Product, User} = require('./models')

const newProducts = [
  {
    name: "Sharpie",
    price: 3.99
  },
  {
    name: "Pencil",
    price: 0.49
  },
  {
    name: "Pen",
    price: 1.99
  },
  {
    name: "Notepad",
    price: 5.99
  },
  {
    name: "Gold Plated Paper",
    price: 5999.99
  },
]

const newUsers = [
  {
    username: "SuthyScott",
    password: "password"
  },
  {
    username: "ImABot9000",
    password: "notarobot"
  },
  {
    username: "katieshooool",
    password: "duckyIsMyFav"
  }
]

const seed = async () => {
  await Product.bulkCreate(newProducts)
  await User.bulkCreate(newUsers)
  console.log("Seeded :)")
}

module.exports = seed