import { OrderDetails } from "./orderDetails";
import { Orders } from "./orders";
import { Suppliers } from "./suppliers";
import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";

@Entity({ name: "products" })
export class Products extends BaseEntity {
  @PrimaryColumn({ name: "ProductID" })
  ProductID!: string;

  @Column({ name: "ProductName" })
  ProductName!: string;

  @Column({ name: "SupplierID" })
  SupplierID!: string;

  @Column({ name: "CategoryID" })
  CategoryID!: string;

  @Column({ name: "QuantityPerUnit" })
  QuantityPerUnit!: string;

  @Column({ name: "UnitPrice" })
  UnitPrice!: string;

  @Column({ name: "UnitsInStock" })
  UnitsInStock!: string;

  @Column({ name: "UnitsOnOrder" })
  UnitsOnOrder!: string;

  @Column({ name: "ReorderLevel" })
  ReorderLevel!: string;

  @Column({ name: "Discontinued" })
  Discontinued!: string;

  @ManyToOne(() => Suppliers, (suppliers) => suppliers.products)
  @JoinColumn({ name: "SupplierID" })
  suppliers!: Suppliers;

  @ManyToOne(() => Orders, (orders) => orders.products)
  @JoinColumn({ name: "OrderID" })
  orders: Orders | undefined;

  @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.Product)
  orderDetails!: OrderDetails[];
}
