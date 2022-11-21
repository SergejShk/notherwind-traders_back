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
exports.Orders = void 0;
const orderDetailsModel_1 = require("./orderDetailsModel");
const productsModel_1 = require("./productsModel");
const customersModel_1 = require("./customersModel");
const typeorm_1 = require("typeorm");
let Orders = class Orders extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Orders.prototype, "OrderID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Orders.prototype, "CustomerID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Orders.prototype, "EmployeeID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Orders.prototype, "OrderDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Orders.prototype, "RequiredDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Orders.prototype, "ShippedDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Orders.prototype, "ShipVia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Orders.prototype, "Freight", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Orders.prototype, "ShipName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Orders.prototype, "ShipAddress", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Orders.prototype, "ShipCity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Orders.prototype, "ShipRegion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Orders.prototype, "ShipPostalCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Orders.prototype, "ShipCountry", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orderDetailsModel_1.OrderDetails, (orderDetails) => orderDetails.order),
    __metadata("design:type", Array)
], Orders.prototype, "orderDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => productsModel_1.Products, (products) => products.orders),
    __metadata("design:type", Object)
], Orders.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customersModel_1.Customers, (customers) => customers.orders),
    (0, typeorm_1.JoinColumn)({ name: "CustomerID" }),
    __metadata("design:type", customersModel_1.Customers)
], Orders.prototype, "customers", void 0);
Orders = __decorate([
    (0, typeorm_1.Entity)()
], Orders);
exports.Orders = Orders;
//# sourceMappingURL=ordersModel.js.map