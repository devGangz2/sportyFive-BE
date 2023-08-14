const express = require("express");
const mongoose = require('mongoose');

const { userRouter } = require("./app/user/userRouter")
const { productRouter } = require("./app/product/productRouter")
// const { orderRouter } = require("./app/order/orderRouter")
const { sizeProductRouter } = require("./app/product/size/sizeRouter")
const { colorProductRouter } = require("./app/product/color/colorRouter")
const { categoryProductRouter } = require("./app/product/category/categoryRouter")
const { brandProductRouter } = require("./app/product/brand/brandRouter")
const { collectionProductRouter } = require("./app/product/collectionPrd/collectionRouter")

var cookieParser = require('cookie-parser')
require('dotenv').config();

const app = express();
const port = process.env.NODE_PORT;


mongoose.connect(process.env.MONGDB_URI)
    .then(() => console.log('MongDB was Connected!'));

app.use(express.json());
app.use(cookieParser())
var cors = require('cors')
app.use(cors())


app.use("/", userRouter)
// app.use("/", orderRouter)
app.use("/", sizeProductRouter)
app.use("/", colorProductRouter)
app.use("/", categoryProductRouter)
app.use("/", brandProductRouter)
app.use("/", collectionProductRouter)
app.use("/", productRouter)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})