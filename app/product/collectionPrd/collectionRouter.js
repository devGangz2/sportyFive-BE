const express = require("express")
const { createNewCollection, getAllCollection, updateCollectionProduct, deleteCollectionProduct } = require("./collectionController")
const collectionProductRouter = express.Router()
collectionProductRouter.post("/addNewCollectionProduct", createNewCollection)
collectionProductRouter.get("/getAllCollection", getAllCollection)
collectionProductRouter.put("/updateCollectionProduct/:collectionIdParam", updateCollectionProduct)
collectionProductRouter.delete("/deleteCollectionProduct/:collectionIdParam", deleteCollectionProduct)


module.exports = { collectionProductRouter }