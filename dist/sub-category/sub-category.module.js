"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const sub_category_controller_1 = require("./controller/sub-category.controller");
const SubCategory_model_1 = require("./model/SubCategory.model");
const sub_category_service_1 = require("./services/sub-category.service");
const is_exist_category_middleware_1 = require("../category/middlewawre/is-exist-category.middleware");
const category_module_1 = require("../category/category.module");
let SubCategoryModule = class SubCategoryModule {
    configure(consumer) {
        consumer
            .apply(is_exist_category_middleware_1.IsExistCategoryMiddleware)
            .forRoutes({ path: 'sub-category', method: common_1.RequestMethod.POST });
    }
};
SubCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            category_module_1.CategoryModule,
            mongoose_1.MongooseModule.forFeature([
                { name: SubCategory_model_1.SubCategory.name, schema: SubCategory_model_1.SubCategorySchema },
            ]),
        ],
        controllers: [sub_category_controller_1.SubCategoryController],
        providers: [sub_category_service_1.SubCategoryService],
    })
], SubCategoryModule);
exports.SubCategoryModule = SubCategoryModule;
//# sourceMappingURL=sub-category.module.js.map