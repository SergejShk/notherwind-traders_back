"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const orderDetailsModel_1 = require("./orderDetailsModel");
const ordersModel_1 = require("./ordersModel");
const suppliersModel_1 = require("./suppliersModel");
const typeorm_1 = require("typeorm");
let Products = class Products extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Products.prototype, "ProductID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Products.prototype, "ProductName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Products.prototype, "SupplierID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Products.prototype, "CategoryID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Products.prototype, "QuantityPerUnit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Products.prototype, "UnitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Products.prototype, "UnitsInStock", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Products.prototype, "UnitsOnOrder", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Products.prototype, "ReorderLevel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Products.prototype, "Discontinued", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => suppliersModel_1.Suppliers, (suppliers) => suppliers.products),
    (0, typeorm_1.JoinColumn)({ name: "SupplierID" }),
    __metadata("design:type", suppliersModel_1.Suppliers)
], Products.prototype, "suppliers", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ordersModel_1.Orders, (orders) => orders.products),
    (0, typeorm_1.JoinColumn)({ name: "OrderID" }),
    __metadata("design:type", Object)
], Products.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orderDetailsModel_1.OrderDetails, (orderDetails) => orderDetails.Product),
    __metadata("design:type", Array)
], Products.prototype, "orderDetails", void 0);
Products = __decorate([
    (0, typeorm_1.Entity)()
], Products);
exports.Products = Products;
//# sourceMappingURL=productsModel.js.map