const { default: mongoose } = require("mongoose")
const categoryProductModel = require("./categoryModel")

const createNewCategory = async (req, res) => {
    let body = req.body
    let newCategory = new categoryProductModel({ ...body })
    try {
        return res.status(201).json(await newCategory.save())
    } catch {
        return res.status(500).json({
            status: "Cannot create new category"
        })
    }
}

const getAllCategory = async (req, res) => {
    try {
        const allCategory = await categoryProductModel.find()
        return res.status(200).json(allCategory)
    } catch (error) {
        return res.status(500).json({
            status: "Cannot get all category"
        })
    }
}


const updateCategoryProduct = async (req, res) => {
    let categoryId = req.params.categoryIdParam
    let body = req.body

    try {
        const categoryNeedUpdate = await categoryProductModel.findById(categoryId)
        console.log(categoryNeedUpdate);
        if (categoryNeedUpdate !== null) {
            const categoryUpdated = await categoryProductModel.findByIdAndUpdate({ _id: categoryId },
                {
                    category: body.category
                }, {
                new: true
            })
            return res.status(200).json()
        } else { }

    } catch (error) {
        return res.status(500).json({
            status: "Cannot update category product"
        })
    }
}

const deleteCategoryProduct = async (req, res) => {
    let categoryId = req.params.categoryIdParam
    try {
        const categoryNeedDelete = await categoryProductModel.findByIdAndDelete({ _id: categoryId })
        if (!categoryNeedDelete) {
            return res.status(404).json({
                mes: "Cannot found the category to need delete"
            })
        }
        if (categoryNeedDelete) {
            return res.status(204).json()
        }
    } catch (error) {
        return res.status(500).json({
            status: "Cannot delete the category product"
        })
    }
}

module.exports = { createNewCategory, getAllCategory, updateCategoryProduct, deleteCategoryProduct }