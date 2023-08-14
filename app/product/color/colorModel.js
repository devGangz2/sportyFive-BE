const mongoose = require('mongoose')
const Schema = mongoose.Schema

const colorProductModel = new Schema({
    label: {
        type: String,
        unique: true
    },
    value: {
        type: String,
    }
})

module.exports = mongoose.model("color", colorProductModel)

