const mongoose = require("mongoose");
const User = require('./models/User');
const Product = require('./models/Product');

mongoose.connect(
  "mongodb+srv://localhost:<port>",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB for seeding");
    }
  }
);

const seedProducts = [
    {
      title: "Product 1",
      price: 19.99,
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Product 2",
      price: 29.99,
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Product 3",
      price: 39.99,
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Product 4",
      price: 49.99,
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Product 5",
      price: 59.99,
      image: "https://via.placeholder.com/150"
    }
  ];

const seedUsers = [
    {
      email: "user1@test.com",
      password: 123456
    },
    {
      email: "user2@test.com",
      password: 123456
    },
    {
      email: "user3@test.com",
      password: 123456
    }
  ];

const seedDb = async () => {
    await Product.deleteMany({});
  	await Product.insertMany(seedProducts);
    await User.deleteMany({});
  	await User.insertMany(seedUsers);  
}

	seedDb().then(() => {
		mongoose.connection.close();
	})
