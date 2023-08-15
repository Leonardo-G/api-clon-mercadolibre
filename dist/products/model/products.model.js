"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsSchema = exports.Products = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_model_1 = require("../../user/model/user.model");
let Products = class Products extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'User',
    }),
    __metadata("design:type", user_model_1.User)
], Products.prototype, "idUser", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        index: {
            text: true,
            weights: {
                title: 10,
            },
        },
    }),
    __metadata("design:type", String)
], Products.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [String],
        default: [
            'https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png',
        ],
    }),
    __metadata("design:type", Array)
], Products.prototype, "imgProduct", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [String],
        required: true,
    }),
    __metadata("design:type", Array)
], Products.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [String],
        required: true,
    }),
    __metadata("design:type", Array)
], Products.prototype, "subCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Array,
        default: [],
    }),
    __metadata("design:type", Array)
], Products.prototype, "characteristics", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                code: { type: String, required: true },
                info: [
                    {
                        title: { type: String, required: true },
                        description: { type: String, required: true },
                    },
                ],
            },
        ],
        required: true,
    }),
    __metadata("design:type", Array)
], Products.prototype, "characteristicsDetail", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Products.prototype, "recommended", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Products.prototype, "visited", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Products.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], Products.prototype, "stock", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], Products.prototype, "sold", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Products.prototype, "offer", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            price: {
                type: Number,
                required: true,
            },
            offerPrice: {
                type: Number,
                default: 0,
            },
        },
    }),
    __metadata("design:type", Object)
], Products.prototype, "priceDetail", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            code: {
                type: Number,
                enum: [0, 1, 2],
                default: 0,
            },
            detail: {
                type: String,
                default: '',
            },
        },
    }),
    __metadata("design:type", Object)
], Products.prototype, "shipping", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            accept: {
                type: Boolean,
                default: false,
            },
            until: {
                type: Number,
                default: 0,
                enum: [0, 3, 6, 12],
            },
        },
    }),
    __metadata("design:type", Object)
], Products.prototype, "interests", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['nuevo', 'usado', 'reacondicionado'],
        default: 'nuevo',
    }),
    __metadata("design:type", String)
], Products.prototype, "condition", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Array,
        required: true,
    }),
    __metadata("design:type", Array)
], Products.prototype, "tags", void 0);
Products = __decorate([
    (0, mongoose_1.Schema)({
        strict: true,
        timestamps: true,
    })
], Products);
exports.Products = Products;
exports.ProductsSchema = mongoose_1.SchemaFactory.createForClass(Products);
//# sourceMappingURL=products.model.js.map