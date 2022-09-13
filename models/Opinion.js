import mongoose from "mongoose";

const OpinionSchema = new mongoose.Schema({
    created: {
        type: Number,
        default: Date.now
    },
    idProduct: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    idUserOpinion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    like: {
        type: Number,
        default: 0
    },
    down: {
        type: Number,
        default: 0
    },
    rate: {
        type: Number,
        required: true
    }
})

export default mongoose.model( "Opinion", OpinionSchema );