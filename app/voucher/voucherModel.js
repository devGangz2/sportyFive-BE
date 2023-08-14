const { default: mongoose } = require("mongoose")
const Schema = mongoose.Schema
const voucherSchema = new Schema({
    maGiamGia: {
        type: String
    },
    phanTramGiamGia: {
        type: String
    }
})

module.exports = mongoose.model("voucher", voucherSchema)