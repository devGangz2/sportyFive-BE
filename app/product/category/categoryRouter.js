const express = require("express")
const { createNewCategory, getAllCategory, updateCategoryProduct, deleteCategoryProduct } = require("./categoryController")
const categoryProductRouter = express.Router()
categoryProductRouter.post("/addNewCategoryProduct", createNewCategory)
categoryProductRouter.get("/getAllCategory", getAllCategory)
categoryProductRouter.put("/updateCategoryProduct/:categoryIdParam", updateCategoryProduct)
categoryProductRouter.delete("/deleteCategoryProduct/:categoryIdParam", deleteCategoryProduct)


module.exports = { categoryProductRouter }