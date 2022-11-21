"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}
exports.CustomError = CustomError;
//# sourceMappingURL=errors.js.map