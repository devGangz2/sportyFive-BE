const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({

    tenSanPham: { type: String },
    anhDaiDienSanPham: { type: String },
    anhSanPham: [],
    nhanHieu: { type: String },
    chungLoai: { type: String },
    boSuuTap: { type: String },
    mauSac: { type: String },
    kichCo: { type: String },
    tongSoLuong: { type: Number },
    giaTien: { type: Number },
    giamGia: { type: Number },
    moTa1: { type: String },
    moTa2: { type: String },
    moTa3: { type: String },
    moTa4: { type: String },
    moTa5: { type: String },
    moTaChiTiet: { type: String }
})

module.exports = mongoose.model("product", productSchema)