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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_model_1 = require("../model/user.model");
const mongoose_2 = require("mongoose");
const bcryptPassword_1 = require("../utils/bcryptPassword");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(userModel, bcryptPassword, jwtService) {
        this.userModel = userModel;
        this.bcryptPassword = bcryptPassword;
        this.jwtService = jwtService;
    }
    async newUser(userDTO) {
        const isExistUSer = await this.userModel
            .findOne({ email: userDTO.email })
            .exec();
        if (isExistUSer)
            throw new common_1.BadRequestException(`The email ${userDTO.email} it already exists`);
        userDTO.password = this.bcryptPassword.hashPassword(userDTO.password);
        const user = new this.userModel(userDTO);
        user.save();
        const { username, email, typeUser, imgUrl, _id } = user;
        return {
            _id,
            username,
            email,
            typeUser,
            imgUrl,
            token: this.jwtService.sign({ _id, email }),
        };
    }
    async login(userDTO) {
        const user = await this.userModel.findOne({ email: userDTO.email }).exec();
        if (!user)
            throw new common_1.BadRequestException(`User ${userDTO.email} is does not exists`);
        this.bcryptPassword.comparePassword(userDTO.password, user.password);
        const { username, email, typeUser, imgUrl, _id } = user;
        return {
            _id,
            username,
            email,
            typeUser,
            imgUrl,
            token: this.jwtService.sign({ _id, email }),
        };
    }
    async getAllStores(category, limit, skip) {
        const stores = await this.userModel
            .find({
            categories: { $in: [category] },
            typeUser: 'official-store',
        })
            .limit(limit)
            .skip(skip)
            .exec();
        return stores;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_model_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        bcryptPassword_1.BcryptPassword,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map