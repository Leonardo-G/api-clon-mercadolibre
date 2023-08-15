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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const products_model_1 = require("../model/products.model");
const mongoose_2 = require("mongoose");
const products_transformers_1 = require("../transformers/products.transformers");
let ProductsService = class ProductsService {
    constructor(productsModel) {
        this.productsModel = productsModel;
    }
    async newProduct(id, products) {
        const product = new this.productsModel(Object.assign({ idUser: id }, products));
        await product.save();
        return product;
    }
    async findProductById(id) {
        const product = await this.productsModel.findById(id).lean();
        return product;
    }
    async findProductsByQuerys(searchQuerys) {
        const query = this.productsModel.find();
        if (searchQuerys.search)
            query.where({
                $text: {
                    $search: searchQuerys.search,
                    $caseSensitive: false,
                },
            });
        if (searchQuerys.category) {
            query.in('category', [searchQuerys.category]);
        }
        if (searchQuerys.offer) {
            query.where('offer').equals(true);
        }
        if (searchQuerys.shipping) {
            query.where('shipping.code').equals(searchQuerys.shipping);
        }
        if (searchQuerys.interests && searchQuerys.until) {
            query.where('interests.accept').equals(true);
            query.where('interests.until').equals(searchQuerys.until);
        }
        if (searchQuerys.interests && !searchQuerys.until) {
            query.where('interests.accept').equals(true);
        }
        if (searchQuerys.condition === 'nuevo' ||
            searchQuerys.condition === 'usado' ||
            searchQuerys.condition === 'reacondicionado') {
            query.where('condition').equals(searchQuerys.condition);
        }
        if (searchQuerys.tags) {
            query.in('tags', [searchQuerys.tags]);
        }
        if (searchQuerys.price_lte && !searchQuerys.offer) {
            query.where('priceDetail.price').lte(searchQuerys.price_lte);
        }
        if (searchQuerys.price_gte && !searchQuerys.offer) {
            query.where('priceDetail.price').gte(searchQuerys.price_gte);
        }
        if (searchQuerys.price_lte && searchQuerys.offer) {
            query.where('priceDetail.offerPrice').lte(searchQuerys.price_lte);
        }
        if (searchQuerys.price_gte && searchQuerys.offer) {
            query.where('priceDetail.offerPrice').gte(searchQuerys.price_gte);
        }
        if (searchQuerys.sort === 'price_asc') {
            query.sort({
                'priceDetail.price': 1,
            });
        }
        if (searchQuerys.sort === 'relevant') {
            query.sort({
                visited: -1,
            });
        }
        const [products, total] = await Promise.all([
            query
                .skip(searchQuerys.skip || 0)
                .limit(searchQuerys.limit || 5)
                .lean(),
            query.clone().countDocuments().exec(),
        ]);
        const newProducts = products.map((p) => {
            const productShort = new products_transformers_1.ProductShort(p);
            return productShort;
        });
        return {
            products: newProducts,
            totalProducts: total,
        };
    }
    async getProductsBySubCategory(subCategory) {
        const products = await this.productsModel.find({
            subCategory: { $in: subCategory },
        });
        const newProducts = products.map((p) => {
            const productShort = new products_transformers_1.ProductShort(p);
            return productShort;
        });
        return {
            products: newProducts,
        };
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(products_model_1.Products.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map