import mongoose from "mongoose";

const SubCategorySchema = new mongoose.Schema({
    category: {
        code: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    subCategory: {
        code: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    imgUrl: {
        type: String,
        required: true
    }
})

export default mongoose.model( "SubCategory", SubCategorySchema );