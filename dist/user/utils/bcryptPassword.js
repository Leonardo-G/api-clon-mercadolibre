"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptPassword = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
class BcryptPassword {
    hashPassword(password) {
        const saltOrRounds = 10;
        const hash = bcrypt.hashSync(password, saltOrRounds);
        return hash;
    }
    comparePassword(password, hashPassword) {
        const isCorrectPassword = bcrypt.compareSync(password, hashPassword);
        if (!isCorrectPassword)
            throw new common_1.BadRequestException('email/password incorrect');
        return isCorrectPassword;
    }
}
exports.BcryptPassword = BcryptPassword;
//# sourceMappingURL=bcryptPassword.js.map