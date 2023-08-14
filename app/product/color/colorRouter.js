const express = require("express")
const { createNewColor, getAllColor, updateColorProduct, deleteColorProduct } = require("./colorController")
const colorProductRouter = express.Router()
colorProductRouter.post("/addNewColorProduct", createNewColor)
colorProductRouter.get("/getAllColor", getAllColor)
colorProductRouter.put("/updateColorProduct/:colorIdParam", updateColorProduct)
colorProductRouter.delete("/deleteColorProduct/:colorIdParam", deleteColorProduct)


module.exports = { colorProductRouter }