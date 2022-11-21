"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployeesController = void 0;
const getEmployeesController = (req, res) => {
    console.log(req);
    return res.status(200).json("Employees");
};
exports.getEmployeesController = getEmployeesController;
//# sourceMappingURL=employeesController.js.map