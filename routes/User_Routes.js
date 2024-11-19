import express from 'express'
import { deleteAllUserData, getUserData, signUp } from '../controller/User_controller.js'

const User_router = express.Router()

User_router.route('/signUp').post(signUp).get(getUserData).delete(deleteAllUserData)

export default User_router;