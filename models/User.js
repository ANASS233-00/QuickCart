import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: { type: string, requied: true },
    name: { type: string, requied: true },
    email: { type: string, requied: true, unique:true },
    imageUrl: { type: string, requied: true },
    cartItems: { type:Object, default: {}}
},{minimize:false})

const User = mongoose.models.user || mongoose.model('user',userSchema)

export default User