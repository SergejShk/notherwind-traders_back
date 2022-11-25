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
exports.getAllOrdersController = void 0;
const ordersService_1 = require("../services/ordersService");
const getAllOrdersController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let page = req.query.page ? Number(req.query.page) : 1;
    const take = 20;
    let skip = page * take - take;
    try {
        const data = yield (0, ordersService_1.getAllOrders)(skip, take);
        return res.status(200).json(data);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllOrdersController = getAllOrdersController;
//# sourceMappingURL=ordersController.js.map