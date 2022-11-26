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
exports.getSupplierById = exports.getAllSuppliers = void 0;
const dbSourse_1 = require("../db/dbSourse");
const suppliersModel_1 = require("../models/suppliersModel");
const suppliersRepository = dbSourse_1.AppDataSource.getRepository(suppliersModel_1.Suppliers);
const getAllSuppliers = (skip, take) => __awaiter(void 0, void 0, void 0, function* () {
    const [data, total] = yield suppliersRepository.findAndCount({
        skip,
        take,
    });
    return { total, data };
});
exports.getAllSuppliers = getAllSuppliers;
const getSupplierById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield suppliersModel_1.Suppliers.createQueryBuilder("suppliers")
        .where("suppliers.SupplierID = :SupplierID", { SupplierID: id })
        .getOne();
    return data;
});
exports.getSupplierById = getSupplierById;
//# sourceMappingURL=suppliersService.js.map