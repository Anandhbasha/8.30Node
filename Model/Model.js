import mongoose from "mongoose";

const newSchema = new mongoose.Schema({
    userName:String,
    userEmail:String,
    userNumber:Number,
    userPassword:String
})

const user = mongoose.model('users',newSchema,"NewTable")

export default user