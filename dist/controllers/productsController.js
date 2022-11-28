"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductByIdController = exports.getAllProductsController = void 0;
const productsService_1 = require("../services/productsService");
const getAllProductsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let page = req.query.page ? Number(req.query.page) : 1;
    const take = 20;
    let skip = page * take - take;
    try {
        const data = yield (0, productsService_1.getAllProducts)(skip, take);
        return res.status(200).json(data);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllProductsController = getAllProductsController;
const getProductByIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const product = yield (0, productsService_1.getProductById)(id);
        return res.status(200).json(product);
    }
    catch (error) {
        next(error);
    }
});
exports.getProductByIdController = getProductByIdController;
//# sourceMappingURL=productsController.js.map