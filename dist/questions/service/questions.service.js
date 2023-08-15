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
exports.QuestionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const questions_model_1 = require("../model/questions.model");
const mongoose_2 = require("mongoose");
let QuestionsService = class QuestionsService {
    constructor(questionsModel) {
        this.questionsModel = questionsModel;
    }
    async newQuestion(idProduct, question) {
        const questionObj = new this.questionsModel({
            idProduct,
            question,
        });
        await questionObj.save();
        return questionObj;
    }
    async findByIdAndResponse(idQuestion, response) {
        const question = await this.questionsModel
            .findByIdAndUpdate(idQuestion, {
            response,
            answered: true,
        }, { $mew: true })
            .exec();
        return question;
    }
    async findQuestions(idProduct, skip, limit) {
        const questions = await this.questionsModel
            .find({ idProduct })
            .skip(skip)
            .limit(limit)
            .lean();
        return questions;
    }
};
QuestionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(questions_model_1.Questions.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], QuestionsService);
exports.QuestionsService = QuestionsService;
//# sourceMappingURL=questions.service.js.map