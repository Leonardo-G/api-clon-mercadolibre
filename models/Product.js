import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imgProduct: {
        type: Array,
        default: ["https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png"]
    },
    category: [{
        code: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }],
    subCategory: [{
        code: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }],
    characteristics: {
        type: Array,
        default: []
    },
    characteristicsDetail: [{
        code: {
            type: String,
            required: true
        },
        info: [{
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
        }]
    }],
    recommended: {
        type: Boolean,
        default: false
    },
    visited: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    sold: {
        type: Number,
        default: 0
    },
    created: {
        type: String,
        default: Date.now()
    },
    offer: {
        type: Boolean,
        default: false
    },
    priceDetail: {
        price: {
            type: Number,
            required: true
        },
        offerPrice: {
            type: Number,
            default: 0
        },
    },
    shipping: {
        code: {
            type: Number,
            enum: [0, 1, 2],
            default: 0
        },
        detail: {
            type: String,
            default: ""
        }
    },
    interests: {
        accept: {
            type: Boolean,
            default: false
        },
        until: {
            type: Number,
            default: 0,
            enum: [0, 3, 6, 12]
        }
    },
    condition: {
        type: String,
        enum: ["nuevo", "usado", "reacondicionado"],
        default: "nuevo"
    },
    tags: {
        type: Array,
        required: true
    }
})

export default mongoose.model( "Product", ProductSchema );