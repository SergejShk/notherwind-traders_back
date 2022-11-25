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
exports.OrderDetails = void 0;
const ordersModel_1 = require("./ordersModel");
const productsModel_1 = require("./productsModel");
const typeorm_1 = require("typeorm");
let OrderDetails = class OrderDetails extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderDetails.prototype, "OrderDetailsID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "OrderID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "ProductID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "UnitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "Quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "Discount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ordersModel_1.Orders, (order) => order.orderDetails),
    (0, typeorm_1.JoinColumn)({ name: "OrderID" }),
    __metadata("design:type", ordersModel_1.Orders)
], OrderDetails.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => productsModel_1.Products, (product) => product.orderDetails),
    (0, typeorm_1.JoinColumn)({ name: "ProductID" }),
    __metadata("design:type", productsModel_1.Products)
], OrderDetails.prototype, "Product", void 0);
OrderDetails = __decorate([
    (0, typeorm_1.Entity)()
], OrderDetails);
exports.OrderDetails = OrderDetails;
//# sourceMappingURL=orderDetailsModel.js.map