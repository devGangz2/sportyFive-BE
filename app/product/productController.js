const { default: mongoose } = require("mongoose")
const productModel = require("./productModel")


const createNewProduct = async (req, res) => {
    let body = req.body
    let newProduct = new productModel({ ...body })
    try {
        res.status(201).json(await newProduct.save())
    } catch (error) {
        return res.status(500).json({
            status: "Cannot create new product",
        })
    }
}


const getAllProduct = async (req, res) => {
    try {
        const allProduct = await productModel.find()
        return res.status(200).json(allProduct)
    } catch (error) {
        return res.status(500).json({
            status: "Cannot get all product"
        })
    }
}

const getProductById = async (req, res) => {
    let idProduct = req.params.idProductParam
    try {
        const productIs = await productModel.findById(idProduct)
        return res.status(200).json(productIs)
    } catch (error) {
        return res.status(500).json({
            status: "Cannot get product by Id"
        })
    }
}

const updateProductById = async (req, res) => {
    let id = req.body.idPrd
    let body = req.body

    try {
        const productNeedUpdate = await productModel.findById(id)

        if (productNeedUpdate !== null) {
            const productUpdated = await productModel.findByIdAndUpdate({ _id: id },
                {
                    tenSanPham: body.tenSanPham,
                    anhDaiDienSanPham: body.anhDaiDienSanPham,
                    anhSanPham: body.anhSanPham,
                    nhanHieu: body.nhanHieu,
                    chungLoai: body.chungLoai,
                    boSuuTap: body.boSuuTap,
                    mauSac: body.mauSac,
                    kichCo: body.kichCo,
                    tongSoLuong: body.tongSoLuong,
                    giaTien: body.giaTien,
                    giamGia: body.giamGia,
                    moTa1: body.moTa1,
                    moTa2: body.moTa2,
                    moTa3: body.moTa3,
                    moTa4: body.moTa4,
                    moTa5: body.moTa5,
                    moTaChiTiet: body.moTaChiTiet
                }, {
                new: true
            })
            return res.status(200).json()
        } else { }

    } catch (error) {
        return res.status(500).json({
            status: "Cannot update product"
        })
    }
}

const deleteProductById = async (req, res) => {
    let id = req.body._id
    // let body = req.body
    console.log(id);
    try {
        const productNeedDelete = await productModel.findByIdAndDelete({ _id: id })
        if (!productNeedDelete) {
            return res.status(404).json({
                mes: "Cannot found the product to need delete"
            })
        }
        if (productNeedDelete) {
            return res.status(204).json()
        }
    } catch (error) {
        return res.status(500).json({
            status: "Cannot delete the product"
        })
    }
}

module.exports = {
    createNewProduct,
    getAllProduct,
    getProductById,
    updateProductById,
    deleteProductById
}