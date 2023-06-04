import mongoose, { Document, Schema } from "mongoose"

export interface IUser extends Document {
    username: string;
    lastname?: string;
    email: string;
    password: string;
    typeUser: 'user' | 'official-store';
    imgUrl: string;
    created: Date;
    categories: any[];
    tags: any[];
}

const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        default: null
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

export default mongoose.model<IUser>('User', UserSchema);