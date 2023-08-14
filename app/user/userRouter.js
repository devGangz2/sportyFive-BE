const express = require("express")
const { createNewUser, getUserByUid, getAllUser, updateUserById, loginByEmail, getUserFromCookie, updateAvatar } = require("./userController")
const userRouter = express.Router()
userRouter.post("/createNewUser", createNewUser)
userRouter.get("/getUserByUid/:uId", getUserByUid)
userRouter.get("/getAllUser", getAllUser)
userRouter.put("/updateUserById", updateUserById)
userRouter.post("/login", loginByEmail)
userRouter.post("/sendCookie", getUserFromCookie)
userRouter.put("/updateTheAvatar", updateAvatar)



module.exports = { userRouter }



