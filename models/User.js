import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        dafault: null
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    typeUser: {
        type: String,
        enum: ["user", "official-store"],
        default: "user"
    },
    imgUrl: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    },
    created: {
        type: Number,
        default: Date.now()
    },
    categories: {       
        type: Array,
        default: []
    },
    // Cuando el usuario sea una tienda, colocar tags que representan la tienda.
    tags: {
        type: Array,
        default: []
    }
})

export default mongoose.model( "User", UserSchema );