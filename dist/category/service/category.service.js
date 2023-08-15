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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const category_model_1 = require("../model/category.model");
const SubCategory_model_1 = require("../../sub-category/model/SubCategory.model");
let CategoryService = class CategoryService {
    constructor(categoryModel, subCategoryModel) {
        this.categoryModel = categoryModel;
        this.subCategoryModel = subCategoryModel;
    }
    async newCategory(categoryDTO) {
        const isExistCategory = await this.categoryModel
            .findOne({ code: categoryDTO.code })
            .exec();
        if (isExistCategory)
            throw new common_1.BadRequestException(`The category ${categoryDTO.code} is already exists`);
        const category = new this.categoryModel(categoryDTO);
        await category.save();
        return category;
    }
    async findOneCategory(code) {
        const category = await this.categoryModel.findOne({ code });
        return category;
    }
    async findSubCategoriesOfCategory(category) {
        const categoryDocument = await this.categoryModel
            .findOne({ code: category })
            .exec();
        const subCategories = await this.subCategoryModel
            .find({ category: categoryDocument._id })
            .exec();
        return subCategories;
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(category_model_1.Category.name)),
    __param(1, (0, mongoose_1.InjectModel)(SubCategory_model_1.SubCategory.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map