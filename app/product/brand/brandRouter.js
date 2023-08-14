const express = require("express")
const { createNewBrand, getAllBrand, updateBrandProduct, deleteBrandProduct } = require("./brandController")
const brandProductRouter = express.Router()
brandProductRouter.post("/addNewBrandProduct", createNewBrand)
brandProductRouter.get("/getAllBrand", getAllBrand)
brandProductRouter.put("/updateBrandProduct/:brandIdParam", updateBrandProduct)
brandProductRouter.delete("/deleteBrandProduct/:brandIdParam", deleteBrandProduct)


module.exports = { brandProductRouter }