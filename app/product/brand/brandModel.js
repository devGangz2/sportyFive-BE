const mongoose = require('mongoose')
const Schema = mongoose.Schema

const brandProductModel = new Schema({
    label: {
        type: String,
        unique: true
    },
    value: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model("brand", brandProductModel)

