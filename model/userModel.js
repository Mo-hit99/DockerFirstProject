import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 username :{
    type:String,
    require : [true, "user must have a username"],
    unique : true,
 },
 password : {
    type : String,
    require : [true , "user must have a password"],
    unique:true
 }
})

const UserModel = mongoose.model('UserData', userSchema)

export default UserModel;