"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpinionModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const opinion_model_1 = require("./model/opinion.model");
const opinion_controller_1 = require("./controller/opinion.controller");
const opinion_service_1 = require("./service/opinion.service");
const user_model_1 = require("../user/model/user.model");
let OpinionModule = class OpinionModule {
};
OpinionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: opinion_model_1.Opinion.name,
                    schema: opinion_model_1.OpinionSchema,
                },
                {
                    name: user_model_1.User.name,
                    schema: user_model_1.UserSchema,
                },
            ]),
        ],
        controllers: [opinion_controller_1.OpinionController],
        providers: [opinion_service_1.OpinionService],
    })
], OpinionModule);
exports.OpinionModule = OpinionModule;
//# sourceMappingURL=opinion.module.js.map