import UserModel from "../model/userModel.js";

export const signUp = async (req,res)=>{
    try {
        const NewUser = await UserModel.create(req.body)
        res.status(200).json({
            status : 'success',
            NewUser
        })

    } catch (error) {
        console.log('error look Up For ---->>',error)
        res.status(400).json({
            status : 'fail',
        }) 
    }
}

export const getUserData = async (req,res)=>{
    try {
        const NewUser = await UserModel.find();
        res.status(200).json({
            status : 'success',
            NewUser,
            UserLength : NewUser.length
        })

    } catch (error) {
        console.log('error look Up For ---->>',error)
        res.status(400).json({
            status : 'fail',
        }) 
    }
}
export const deleteAllUserData = async (req,res)=>{
    try {
        const DeleteAllUser = await UserModel.deleteMany({});
        res.status(200).json({
            status : 'success',
            DeleteAllUser
        })

    } catch (error) {
        console.log('error look Up For ---->>',error)
        res.status(400).json({
            status : 'fail',
        }) 
    }
}

