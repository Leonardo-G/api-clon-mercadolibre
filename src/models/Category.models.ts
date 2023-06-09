import mongoose, { Schema } from "mongoose";

import { ICategory } from "../interfaces/category";

const CategorySchema: Schema = new Schema({
    code: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

export default mongoose.model<ICategory>( "SubCategory", CategorySchema );