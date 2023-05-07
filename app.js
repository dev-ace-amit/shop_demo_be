const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/ProductRoutes");
const cartRouter = require("./routes/CartRoutes");
const userRouter = require("./routes/UserRoutes");
const bodyParser = require('body-parser');
const cors = require("cors");


const app = express();

// create application/json parser
var jsonParser = bodyParser.json()


//middleware
app.use(cors());
app.use("/api/login", jsonParser, userRouter);
app.use("/api/products", jsonParser, productRouter);
app.use("/api/cart", jsonParser, cartRouter);
app.use(express.json());


//configure mongoose
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
      console.log("Connected to MongoDB");
    }
  }
);

  

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;
