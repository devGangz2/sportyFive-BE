
const { default: mongoose } = require("mongoose")
const userModel = require("./userModel")
const jwt = require('jsonwebtoken')

const updateAvatar = async (req, res) => {
    let body = req.body
    try {
        const userNeedUpdateAvt = await userModel.findById(body.idUser)
        if (userNeedUpdateAvt !== null) {
            const updateResult = await userModel.findByIdAndUpdate({ _id: body.idUser }, {
                imageUser: body.linkAvtNew
            }, {
                new: true
            })
            // console.log("avt", updateResult);
            res.status(200).json()
        } else { }
    } catch (error) {
        return res.status(500).json({
            status: "Internal error - cant update avatar",
            error: error.message
        })
    }
}


const updateUserById = async (req, res) => {
    let body = req.body
    let getUserUpdate = new userModel({ ...body })
    try {
        const userNeedUpdate = await userModel.findById(body.id)
        if (userNeedUpdate !== null) {
            const updateResult = await userModel.findByIdAndUpdate({ _id: body.id }, {
                tenTaiKhoan: body.tenTaiKhoan,
                soDienThoai: body.soDienThoai,
                email: body.email,
                ngaySinh: body.ngaySinh,
                gioiTinh: body.gioiTinh,
                maSoThue: body.maSoThue,
                soNha: body.soNha,
                tenDuong: body.tenDuong,
                tenPhuongXa: body.tenPhuongXa,
                tenQuanHuyen: body.tenQuanHuyen,
                tenTinh: body.tenTinh,
                maPostCode: body.maPostCode
            }, {
                new: true
            })
            res.status(200).json(updateResult)
        }
        if (userNeedUpdate == null) {
            return res.status(500).json({
                status: "Internal error - cant update",
                user: "cannot update the information"
            })
        }
    } catch (error) {
        return res.status(500).json({
            status: "Internal error - cant update",
            error: error.message
        })
    }
}


const createNewUser = async (req, res) => {
    let body = req.body
    let newUser = new userModel({ ...body })
    try {
        const allUser = await userModel.find()
        // console.log("allUser", allUser);
        // console.log("newUser", newUser.uId);
        let uIdArray = []
        allUser.map((item) => {
            return (
                uIdArray.push(item.uId)
            )
        })
        let isUidInclude = uIdArray.includes(newUser.uId)

        if (isUidInclude == false) {
            res.status(201).json(newUser.save())
        }
        if (isUidInclude == true) {
            return res.status(500).json({
                status: "Internal server error - Create newUser - uId was in existence.",
                error: error.message
            })
        }

        // console.log("uIdArray", uIdArray);

    } catch (error) {
        return res.status(500).json({
            status: "Internal server error - Create newUser",
            error: error.message
        })
    }
}

const getAllUser = async (req, res) => {

    try {
        const allUser = await userModel.find()
        return res.status(200).json(allUser)

    } catch (error) {
        return res.status(500).json({
            status: "Internal server error - cannot get all user",
            customer: null
        })
    }
}




const getUserByUid = async (req, res) => {
    let vUid = req.params.uId
    try {
        const userIs = await userModel.find({ uId: vUid })
        if (userIs == null) {
            return res.status.json({
                status: "Internal server error - getUserByUid",
                customer: null
            })
        }
        if (userIs !== null) {
            return res.status(200).json({ userIs })
        }
    } catch (error) {
        return res.status(500).json({
            status: "Internal server error - getUserByUid",
            customer: null
        })
    }
}

const loginByEmail = async (req, res) => {
    var inputEmail = req.body.email
    var inputPassword = req.body.password
    try {
        const userFinding = await userModel.findOne({
            email: inputEmail,
            password: inputPassword
        }).exec()
        if (userFinding !== null) {
            var token = jwt.sign({ userFinding }, process.env.PASSWORD_JWT)
            console.log(process.env.PASSWORD_JWT);
            return res.status(200).json({
                status: "OK! - the user was found!",
                tokenExist: token
            })
        }
    } catch (error) {
        return res.status(500).json({
            status: "Internal server error - loginByEmail",
            tokenExist: null
        })
    }
}




const getUserFromCookie = async (req, res) => {
    try {
        var cookieReceived = req.body.tokenExist;
        console.log("getCookie", cookieReceived);
        var userFromToken = jwt.verify(cookieReceived, process.env.PASSWORD_JWT)
        console.log("userData", userFromToken);

        return res.status(200).json({
            user: userFromToken.userFinding
        })
    } catch (error) {
        return res.status(500).json({
            status: "Internal server error - can get cookies",
            userFound: null
        })
    }
}

module.exports = { createNewUser, getUserByUid, getAllUser, updateUserById, loginByEmail, getUserFromCookie, updateAvatar }

