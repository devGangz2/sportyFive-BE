const { default: mongoose } = require("mongoose")
const collectionProductModel = require("./collectionModel")

const createNewCollection = async (req, res) => {
    let body = req.body
    let newCollection = new collectionProductModel({ ...body })
    try {
        return res.status(201).json(await newCollection.save())
    } catch {
        return res.status(500).json({
            status: "Cannot create new collection"
        })
    }
}

const getAllCollection = async (req, res) => {
    try {
        const allCollection = await collectionProductModel.find()
        return res.status(200).json(allCollection)
    } catch (error) {
        return res.status(500).json({
            status: "Cannot get all collection"
        })
    }
}


const updateCollectionProduct = async (req, res) => {
    let collectionId = req.params.collectionIdParam
    let body = req.body

    try {
        const collectionNeedUpdate = await collectionProductModel.findById(collectionId)
        console.log(collectionNeedUpdate);
        if (collectionNeedUpdate !== null) {
            const collectionUpdated = await collectionProductModel.findByIdAndUpdate({ _id: collectionId },
                {
                    collection: body.collection
                }, {
                new: true
            })
            return res.status(200).json()
        } else { }

    } catch (error) {
        return res.status(500).json({
            status: "Cannot update collection product"
        })
    }
}

const deleteCollectionProduct = async (req, res) => {
    let collectionId = req.params.collectionIdParam
    try {
        const collectionNeedDelete = await collectionProductModel.findByIdAndDelete({ _id: collectionId })
        if (!collectionNeedDelete) {
            return res.status(404).json({
                mes: "Cannot found the collection to need delete"
            })
        }
        if (collectionNeedDelete) {
            return res.status(204).json()
        }
    } catch (error) {
        return res.status(500).json({
            status: "Cannot delete the collection product"
        })
    }
}

module.exports = { createNewCollection, getAllCollection, updateCollectionProduct, deleteCollectionProduct }