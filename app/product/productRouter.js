const express = require("express")
const {
    createNewProduct,
    getAllProduct,
    getProductById,
    updateProductById,
    deleteProductById
} = require("./productController")
const productRouter = express.Router()
productRouter.post("/createNewProduct", createNewProduct)
productRouter.get("/getAllProduct", getAllProduct)
productRouter.get("/product/:idProductParam", getProductById)
productRouter.put("/product", updateProductById)
productRouter.delete("/product", deleteProductById)
module.exports = { productRouter }