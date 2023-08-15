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
exports.SubCategoryController = void 0;
const common_1 = require("@nestjs/common");
const sub_category_service_1 = require("../services/sub-category.service");
const subCategory_dto_1 = require("../dto/subCategory.dto");
let SubCategoryController = class SubCategoryController {
    constructor(subCategoryService) {
        this.subCategoryService = subCategoryService;
    }
    createSubCategory(createSubCategoryDTO, { categoryId }) {
        try {
            return this.subCategoryService.newSubCategory(createSubCategoryDTO, categoryId);
        }
        catch (error) {
            throw new common_1.HttpException(error.msg, error.status);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subCategory_dto_1.CreateSubCategoryDTO, Object]),
    __metadata("design:returntype", void 0)
], SubCategoryController.prototype, "createSubCategory", null);
SubCategoryController = __decorate([
    (0, common_1.Controller)('subcategory'),
    __metadata("design:paramtypes", [sub_category_service_1.SubCategoryService])
], SubCategoryController);
exports.SubCategoryController = SubCategoryController;
//# sourceMappingURL=sub-category.controller.js.map