"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncWrapper = exports.errorHandler = void 0;
const errors_1 = require("./errors");
const errorHandler = (err, _req, res) => {
    if (err instanceof errors_1.CustomError) {
        return res.status(err.status).json(err.message);
    }
    res.status(500).json({ message: err.message });
};
exports.errorHandler = errorHandler;
const asyncWrapper = (controller) => {
    return (req, res, next) => {
        controller(req, res).catch(next);
    };
};
exports.asyncWrapper = asyncWrapper;
//# sourceMappingURL=errorHandlers.js.map