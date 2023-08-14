const mongoose = require('mongoose')
const Schema = mongoose.Schema

const collectionProductModel = new Schema({
    label: {
        type: String,
        unique: true
    },
    value: {
        type: String,
    },
})

module.exports = mongoose.model("collectionPrd", collectionProductModel)

