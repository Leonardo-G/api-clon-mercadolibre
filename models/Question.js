import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
    created: {
        type: Number,
        default: Date.now
    },
    idProduct: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    question: {
        type: String,
        required: true
    },
    response: {
        type: String,
        default: null
    },
    answered: {
        type: Boolean,
        default: false
    }
})

export default mongoose.model( "Question", QuestionSchema );