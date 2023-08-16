"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const category_module_1 = require("./category/category.module");
const sub_category_module_1 = require("./sub-category/sub-category.module");
const products_module_1 = require("./products/products.module");
const opinion_module_1 = require("./opinion/opinion.module");
const questions_module_1 = require("./questions/questions.module");
const environment_config_1 = require("./config/environment.config");
const database_module_1 = require("./database/database.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [environment_config_1.default],
                isGlobal: true,
            }),
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.SECRET_JWT,
                signOptions: { expiresIn: '1d' },
            }),
            database_module_1.DatabaseModule,
            user_module_1.UserModule,
            category_module_1.CategoryModule,
            sub_category_module_1.SubCategoryModule,
            products_module_1.ProductsModule,
            opinion_module_1.OpinionModule,
            questions_module_1.QuestionsModule,
            database_module_1.DatabaseModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map