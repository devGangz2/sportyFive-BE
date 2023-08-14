const express = require("express")
const { createNewSize, getAllSize, updateSizeProduct, deleteSizeProduct } = require("./sizeController")
const sizeProductRouter = express.Router()
sizeProductRouter.post("/addNewSizeProduct", createNewSize)
sizeProductRouter.get("/getAllSize", getAllSize)
sizeProductRouter.put("/updateSizeProduct/:sizeIdParam", updateSizeProduct)
sizeProductRouter.delete("/deleteSizeProduct/:sizeIdParam", deleteSizeProduct)


module.exports = { sizeProductRouter }