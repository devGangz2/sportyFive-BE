const { default: mongoose } = require("mongoose")
const brandProductModel = require("./brandModel")

const createNewBrand = async (req, res) => {
    let body = req.body
    let newBrand = new brandProductModel({ ...body })
    try {
        return res.status(201).json(await newBrand.save())
    } catch {
        return res.status(500).json({
            status: "Cannot create new brand"
        })
    }
}

const getAllBrand = async (req, res) => {
    try {
        const allBrand = await brandProductModel.find()
        return res.status(200).json(allBrand)
    } catch (error) {
        return res.status(500).json({
            status: "Cannot get all brand"
        })
    }
}


const updateBrandProduct = async (req, res) => {
    let brandId = req.params.brandIdParam
    let body = req.body

    try {
        const brandNeedUpdate = await brandProductModel.findById(brandId)
        console.log(brandNeedUpdate);
        if (brandNeedUpdate !== null) {
            const brandUpdated = await brandProductModel.findByIdAndUpdate({ _id: brandId },
                {
                    brand: body.brand
                }, {
                new: true
            })
            return res.status(200).json()
        } else { }

    } catch (error) {
        return res.status(500).json({
            status: "Cannot update brand product"
        })
    }
}

const deleteBrandProduct = async (req, res) => {
    let brandId = req.params.brandIdParam
    try {
        const brandNeedDelete = await brandProductModel.findByIdAndDelete({ _id: brandId })
        if (!brandNeedDelete) {
            return res.status(404).json({
                mes: "Cannot found the brand to need delete"
            })
        }
        if (brandNeedDelete) {
            return res.status(204).json()
        }
    } catch (error) {
        return res.status(500).json({
            status: "Cannot delete the brand product"
        })
    }
}

module.exports = { createNewBrand, getAllBrand, updateBrandProduct, deleteBrandProduct }