"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdersController = void 0;
const getOrdersController = (req, res) => {
    console.log(req);
    return res.status(200).json("Orders");
};
exports.getOrdersController = getOrdersController;
//# sourceMappingURL=ordersController.js.map