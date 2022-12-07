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

@Entity()
export class OrderDetails extends BaseEntity {
  @PrimaryGeneratedColumn()
  OrderDetailsID!: number;

  @Column()
  OrderID!: string;

  @Column()
  ProductID!: string;

  @Column()
  UnitPrice!: string;

  @Column()
  Quantity!: string;

  @Column()
  Discount!: string;

  @ManyToOne(() => Orders, (order) => order.orderDetails)
  @JoinColumn({ name: "OrderID" })
  order!: Orders;

  @ManyToOne(() => Products, (product) => product.orderDetails)
  @JoinColumn({ name: "ProductID" })
  Product!: Products;
}
