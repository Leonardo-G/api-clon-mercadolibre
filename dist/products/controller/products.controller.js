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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("../services/products.service");
const products_dto_1 = require("../dto/products.dto");
const is_existe_user_guard_1 = require("../../common/guard/is-existe-user/is-existe-user.guard");
const mongoose_1 = require("mongoose");
const is_valid_mongo_id_pipe_1 = require("../../common/pipe/is-valid-mongo-id/is-valid-mongo-id.pipe");
const queryProducts_dto_1 = require("../dto/queryProducts.dto");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    createProduct(createProductsDTO, { id }) {
        try {
            return this.productsService.newProduct(id, createProductsDTO);
        }
        catch (error) {
            throw new common_1.HttpException(error.msg, error.status);
        }
    }
    getOnlyProduct(id) {
        try {
            return this.productsService.findProductById(id);
        }
        catch (error) {
            throw new common_1.HttpException(error.msg, error.status);
        }
    }
    getProducts(searchQuerys) {
        try {
            return this.productsService.findProductsByQuerys(searchQuerys);
        }
        catch (error) {
            throw new common_1.HttpException(error.msg, error.status);
        }
    }
    getBySubCategoties(subcategory) {
        try {
            return this.productsService.getProductsBySubCategory(subcategory);
        }
        catch (error) {
            throw new common_1.HttpException(error.msg, error.status);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(is_existe_user_guard_1.IsExisteUserGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [products_dto_1.CreateProductsDTO, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', is_valid_mongo_id_pipe_1.IsValidMongoIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getOnlyProduct", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [queryProducts_dto_1.SearchQuerys]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)(':subcategory/subcategory'),
    __param(0, (0, common_1.Param)('subcategory')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getBySubCategoties", null);
ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map