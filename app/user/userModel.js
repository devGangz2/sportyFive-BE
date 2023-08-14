const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    tenTaiKhoan: {
        type: String,
    },
    uId: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    soDienThoai: {
        type: String
    },

    email: {
        type: String
    },
    imageUser: {
        type: String

    },
    ngaySinh: {
        type: Date
    },
    gioiTinh: {
        type: String
    },
    maSoThue: {
        type: String
    },
    soNha: {
        type: String
    },
    tenDuong: {
        type: String
    },
    tenPhuongXa: {
        type: String
    },
    tenQuanHuyen: {
        type: String
    },
    tenTinh: {
        type: String
    },
    maPostCode: {
        type: String
    },

    role: {
        type: Number
    },
    donHang: [
        {
            type: mongoose.Types.ObjectId,
            ref: "order"
        }
    ],
    maGiamGia: [
        {
            type: mongoose.Types.ObjectId,
            ref: "voucher"
        }
    ]
})

module.exports = mongoose.model("user", userSchema)