import {  AlbumDocumentProps} from "@/app/types";
import mongoose, {Schema} from "mongoose";




const AlbumSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    userId: { type: Number, required: true},
    title: { type: String, required: true, unique: true },
  
})


export default mongoose.models.Albums|| mongoose.model<AlbumDocumentProps>('Albums', AlbumSchema);