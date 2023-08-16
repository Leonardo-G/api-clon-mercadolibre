"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('environment', () => ({
    mongo: process.env.DB_URL_MONGODB_CONNECTION,
    secret: process.env.SECRET_JWT,
    port: process.env.PORT || 3000,
}));
//# sourceMappingURL=environment.config.js.map