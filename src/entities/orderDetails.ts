import { Orders } from "./orders";
import { Products } from "./products";
import {
  Entity,
  BaseEntity,
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "order_details" })
export class OrderDetails extends BaseEntity {
  @PrimaryGeneratedColumn()
  OrderDetailsID!: number;

  @Column({ name: "OrderID" })
  OrderID!: string;

  @Column({ name: "ProductID" })
  ProductID!: string;

  @Column({ name: "UnitPrice" })
  UnitPrice!: string;

  @Column({ name: "Quantity" })
  Quantity!: string;

  @Column({ name: "Discount" })
  Discount!: string;

  @ManyToOne(() => Orders, (order) => order.orderDetails)
  @JoinColumn({ name: "OrderID" })
  order!: Orders;

  @ManyToOne(() => Products, (product) => product.orderDetails)
  @JoinColumn({ name: "ProductID" })
  Product!: Products;
}
