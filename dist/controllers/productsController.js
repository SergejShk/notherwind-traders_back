"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsController = void 0;
const getProductsController = (req, res) => {
    console.log(req);
    return res.status(200).json("Products");
};
exports.getProductsController = getProductsController;
//# sourceMappingURL=productsController.js.map