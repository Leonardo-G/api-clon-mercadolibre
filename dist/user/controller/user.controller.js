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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("../dto/user.dto");
const user_service_1 = require("../service/user.service");
const validate_category_pipe_1 = require("../pipe/validate-category.pipe");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    postRegister(userRegisterDTO) {
        try {
            return this.userService.newUser(userRegisterDTO);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    postLogin(userLoginDTO) {
        try {
            return this.userService.login(userLoginDTO);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    getStores(category, limit, skip) {
        try {
            return this.userService.getAllStores(category, limit, skip);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message, error.status);
        }
    }
};
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserRegisterDTO]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "postRegister", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserLoginDTO]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "postLogin", null);
__decorate([
    (0, common_1.Get)('store/:category'),
    __param(0, (0, common_1.Param)('category', validate_category_pipe_1.ValidateCategoryPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(5), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('skip', new common_1.DefaultValuePipe(0), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getStores", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map