const { default: mongoose } = require("mongoose")
const Schema = mongoose.Schema
const orderSchema = new Schema({
    tenSanPham: {
        type: String
    },
    ngayDatHang: {
        type: String
    },
    brand: {
        type: String
    },
    giaTien: {
        type: Number
    },
    trangThai: {
        type: String
    }
})

module.exports = mongoose.model("order", orderSchema)