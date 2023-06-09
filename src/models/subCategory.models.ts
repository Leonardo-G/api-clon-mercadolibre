import mongoose, { Schema } from "mongoose";

import { ISubCategoryDocument } from "../interfaces/subCategory";

const SubCategorySchema: Schema = new Schema({
    category: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
})

export default mongoose.model<ISubCategoryDocument>( "SubCategory", SubCategorySchema );