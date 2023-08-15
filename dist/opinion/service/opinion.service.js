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
exports.OpinionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const opinion_model_1 = require("../model/opinion.model");
const mongoose_2 = require("mongoose");
let OpinionService = class OpinionService {
    constructor(opinionModel) {
        this.opinionModel = opinionModel;
    }
    async newOpinion(idUser, idProduct, createOpinionDTO) {
        const opinion = new this.opinionModel(Object.assign({ idProduct,
            idUser }, createOpinionDTO));
        await opinion.save();
        return opinion;
    }
    async getOpinions(idProduct) {
        const opinions = await this.opinionModel.find({ idProduct }).lean();
        return opinions;
    }
    async findAndUpdate(idOpinion, updateOpinionDTO) {
        const opinion = await this.opinionModel
            .findByIdAndUpdate(idOpinion, Object.assign({}, updateOpinionDTO), { new: true })
            .exec();
        return opinion;
    }
    async findAndDelete(idOpinion) {
        await this.opinionModel.findByIdAndDelete(idOpinion);
        return { msg: 'Eliminado' };
    }
};
OpinionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(opinion_model_1.Opinion.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OpinionService);
exports.OpinionService = OpinionService;
//# sourceMappingURL=opinion.service.js.map