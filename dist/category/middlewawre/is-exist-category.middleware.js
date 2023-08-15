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
exports.IsExistCategoryMiddleware = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("../service/category.service");
let IsExistCategoryMiddleware = class IsExistCategoryMiddleware {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async use(req, res, next) {
        const code = req.body.code;
        const category = await this.categoryService.findOneCategory(code);
        if (!category)
            throw new common_1.BadRequestException(`category ${code} is does not exist`);
        req.categoryId = category._id;
        next();
    }
};
IsExistCategoryMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], IsExistCategoryMiddleware);
exports.IsExistCategoryMiddleware = IsExistCategoryMiddleware;
//# sourceMappingURL=is-exist-category.middleware.js.map