import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        dafault: null
    },
    type: {
        type: String,
        enum: ["user", "company-brand"]
    },
    imgUrl: {
        type: String,
        required: true
    },
    created: {
        type: Number,
        default: Date.now()
    },
    userCategories: {       // Cuando el usuario sea una tienda, colocar tags de categoria que le representan
        type: Array,
        default: []
    }


})

export default model( "User", UserSchema );