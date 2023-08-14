const { default: mongoose } = require("mongoose")
const sizeProductModel = require("./sizeModel")

const createNewSize = async (req, res) => {
    let body = req.body
    let newSize = new sizeProductModel({ ...body })
    try {
        return res.status(201).json(await newSize.save())
    } catch {
        return res.status(500).json({
            status: "Cannot create new size"
        })
    }
}

const getAllSize = async (req, res) => {
    try {
        const allSize = await sizeProductModel.find()
        return res.status(200).json(allSize)
    } catch (error) {
        return res.status(500).json({
            status: "Cannot get all size"
        })
    }
}


const updateSizeProduct = async (req, res) => {
    let sizeId = req.params.sizeIdParam
    let body = req.body

    try {
        const sizeNeedUpdate = await sizeProductModel.findById(sizeId)
        console.log(sizeNeedUpdate);
        if (sizeNeedUpdate !== null) {
            const sizeUpdated = await sizeProductModel.findByIdAndUpdate({ _id: sizeId },
                {
                    size: body.size
                }, {
                new: true
            })
            return res.status(200).json()
        } else { }

    } catch (error) {
        return res.status(500).json({
            status: "Cannot update size product"
        })
    }
}

const deleteSizeProduct = async (req, res) => {
    let sizeId = req.params.sizeIdParam
    try {
        const sizeNeedDelete = await sizeProductModel.findByIdAndDelete({ _id: sizeId })
        if (!sizeNeedDelete) {
            return res.status(404).json({
                mes: "Cannot found the size to need delete"
            })
        }
        if (sizeNeedDelete) {
            return res.status(204).json()
        }
    } catch (error) {
        return res.status(500).json({
            status: "Cannot delete the size product"
        })
    }
}

module.exports = { createNewSize, getAllSize, updateSizeProduct, deleteSizeProduct }