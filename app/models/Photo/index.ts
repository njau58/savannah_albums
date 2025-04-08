import {  PhotoDocumentProps} from "@/app/types";
import {Schema, model, models} from "mongoose";




const PhotoSchema = new Schema({
    title: { type: String, required: true, unique: true },
    albumId: { type: Number, required: true,  },
    id: { type: Number, required: true, unique: true },
    url: { type: String, required: true, unique: true },

  
})


const Photo = models.Photo || model<PhotoDocumentProps>('Photo', PhotoSchema);

export default Photo;