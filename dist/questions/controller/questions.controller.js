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
exports.QuestionsController = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const is_valid_mongo_id_pipe_1 = require("../../common/pipe/is-valid-mongo-id/is-valid-mongo-id.pipe");
const questions_service_1 = require("../service/questions.service");
let QuestionsController = class QuestionsController {
    constructor(questionsService) {
        this.questionsService = questionsService;
    }
    createQuestion(idProduct, question) {
        try {
            return this.questionsService.newQuestion(idProduct, question);
        }
        catch (error) {
            throw new common_1.HttpException(error.msg, error.status);
        }
    }
    responseQuestion(idQuestion, response) {
        try {
            return this.questionsService.findByIdAndResponse(idQuestion, response);
        }
        catch (error) {
            throw new common_1.HttpException(error.msg, error.status);
        }
    }
    getQuestions(idProduct, limit, skip) {
        try {
            console.log(limit);
            return this.questionsService.findQuestions(idProduct, skip, limit);
        }
        catch (error) {
            throw new common_1.HttpException(error.msg, error.status);
        }
    }
};
__decorate([
    (0, common_1.Post)('/:idProduct/questions'),
    __param(0, (0, common_1.Param)('idProduct', is_valid_mongo_id_pipe_1.IsValidMongoIdPipe)),
    __param(1, (0, common_1.Body)('question')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, String]),
    __metadata("design:returntype", void 0)
], QuestionsController.prototype, "createQuestion", null);
__decorate([
    (0, common_1.Put)(':idProduct/questions/:idQuestion'),
    __param(0, (0, common_1.Param)('idQuestion', is_valid_mongo_id_pipe_1.IsValidMongoIdPipe)),
    __param(1, (0, common_1.Body)('response')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, String]),
    __metadata("design:returntype", void 0)
], QuestionsController.prototype, "responseQuestion", null);
__decorate([
    (0, common_1.Get)(':idProduct/questions'),
    __param(0, (0, common_1.Param)('idProduct', is_valid_mongo_id_pipe_1.IsValidMongoIdPipe)),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(5), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('skip', new common_1.DefaultValuePipe(0), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, Number, Number]),
    __metadata("design:returntype", void 0)
], QuestionsController.prototype, "getQuestions", null);
QuestionsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [questions_service_1.QuestionsService])
], QuestionsController);
exports.QuestionsController = QuestionsController;
//# sourceMappingURL=questions.controller.js.map