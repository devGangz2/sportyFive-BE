const { default: mongoose } = require("mongoose")
const colorProductModel = require("./colorModel")

const createNewColor = async (req, res) => {
    let body = req.body
    let newColor = new colorProductModel({ ...body })
    try {
        return res.status(201).json(await newColor.save())
    } catch {
        return res.status(500).json({
            status: "Cannot create new color"
        })
    }
}

const getAllColor = async (req, res) => {
    try {
        const allColor = await colorProductModel.find()
        return res.status(200).json(allColor)
    } catch (error) {
        return res.status(500).json({
            status: "Cannot get all color"
        })
    }
}


const updateColorProduct = async (req, res) => {
    let colorId = req.params.colorIdParam
    let body = req.body

    try {
        const colorNeedUpdate = await colorProductModel.findById(colorId)
        console.log(colorNeedUpdate);
        if (colorNeedUpdate !== null) {
            const colorUpdated = await colorProductModel.findByIdAndUpdate({ _id: colorId },
                {
                    color: body.color
                }, {
                new: true
            })
            return res.status(200).json()
        } else { }

    } catch (error) {
        return res.status(500).json({
            status: "Cannot update color product"
        })
    }
}

const deleteColorProduct = async (req, res) => {
    let colorId = req.params.colorIdParam
    try {
        const colorNeedDelete = await colorProductModel.findByIdAndDelete({ _id: colorId })
        if (!colorNeedDelete) {
            return res.status(404).json({
                mes: "Cannot found the color to need delete"
            })
        }
        if (colorNeedDelete) {
            return res.status(204).json()
        }
    } catch (error) {
        return res.status(500).json({
            status: "Cannot delete the color product"
        })
    }
}

module.exports = { createNewColor, getAllColor, updateColorProduct, deleteColorProduct }