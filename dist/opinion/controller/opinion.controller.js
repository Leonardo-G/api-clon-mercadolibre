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
exports.OpinionController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const is_existe_user_guard_1 = require("../../common/guard/is-existe-user/is-existe-user.guard");
const is_valid_mongo_id_pipe_1 = require("../../common/pipe/is-valid-mongo-id/is-valid-mongo-id.pipe");
const opinion_service_1 = require("../service/opinion.service");
const opinion_dto_1 = require("../dto/opinion.dto");
let OpinionController = class OpinionController {
    constructor(opinionService) {
        this.opinionService = opinionService;
    }
    getOpinions(idProduct) {
        try {
            return this.opinionService.getOpinions(idProduct);
        }
        catch (error) {
            throw new common_1.HttpException(error.msg, error.status);
        }
    }
    createOpinion(idProduct, { id }, createOpinionDTO) {
        try {
            return this.opinionService.newOpinion(id, idProduct, createOpinionDTO);
        }
        catch (error) {
            throw new common_1.HttpException(error.msg, error.status);
        }
    }
    updateOpinion(idOpinion, updateOpinionDTO) {
        try {
            return this.opinionService.findAndUpdate(idOpinion, updateOpinionDTO);
        }
        catch (error) {
            throw new common_1.HttpException(error.msg, error.status);
        }
    }
    deleteOpinion(idOpinion) {
        try {
            return this.opinionService.findAndDelete(idOpinion);
        }
        catch (error) {
            throw new common_1.HttpException(error.msg, error.status);
        }
    }
};
__decorate([
    (0, common_1.Get)(':idProduct/opinions'),
    __param(0, (0, common_1.Param)('idProduct', new is_valid_mongo_id_pipe_1.IsValidMongoIdPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", void 0)
], OpinionController.prototype, "getOpinions", null);
__decorate([
    (0, common_1.UseGuards)(is_existe_user_guard_1.IsExisteUserGuard),
    (0, common_1.Post)(':idProduct/opinions'),
    __param(0, (0, common_1.Param)('idProduct', new is_valid_mongo_id_pipe_1.IsValidMongoIdPipe())),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, Object, opinion_dto_1.CreateOpinionDTO]),
    __metadata("design:returntype", void 0)
], OpinionController.prototype, "createOpinion", null);
__decorate([
    (0, common_1.UseGuards)(is_existe_user_guard_1.IsExisteUserGuard),
    (0, common_1.Put)(':idProduct/opinions/:idOpinion'),
    __param(0, (0, common_1.Param)('idOpinion')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, opinion_dto_1.UpdateOpinionDTO]),
    __metadata("design:returntype", void 0)
], OpinionController.prototype, "updateOpinion", null);
__decorate([
    (0, common_1.UseGuards)(is_existe_user_guard_1.IsExisteUserGuard),
    (0, common_1.Delete)(':idProduct/opinions/:idOpinion'),
    __param(0, (0, common_1.Param)('idOpinion')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", void 0)
], OpinionController.prototype, "deleteOpinion", null);
OpinionController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [opinion_service_1.OpinionService])
], OpinionController);
exports.OpinionController = OpinionController;
//# sourceMappingURL=opinion.controller.js.map