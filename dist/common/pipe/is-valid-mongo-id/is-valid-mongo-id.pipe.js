"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsValidMongoIdPipe = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let IsValidMongoIdPipe = class IsValidMongoIdPipe {
    transform(value, metadata) {
        const isMongoId = mongoose_1.Types.ObjectId.isValid(value);
        if (!isMongoId)
            throw new common_1.BadRequestException(`The ID '${value}' is not valid`);
        return value;
    }
};
IsValidMongoIdPipe = __decorate([
    (0, common_1.Injectable)()
], IsValidMongoIdPipe);
exports.IsValidMongoIdPipe = IsValidMongoIdPipe;
//# sourceMappingURL=is-valid-mongo-id.pipe.js.map