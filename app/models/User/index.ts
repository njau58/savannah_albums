import {  UserDocumentProps } from "@/app/types";
import mongoose, {Schema} from "mongoose";




const UserSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
  
})


export default  mongoose.models.Users||mongoose.model<UserDocumentProps>('Users', UserSchema);