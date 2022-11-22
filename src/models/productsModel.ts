// import { OrderDetails } from "./orderDetailsModel";
// import { Orders } from "./ordersModel";
// import { Suppliers } from "./suppliersModel";
import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  // ManyToOne,
  // JoinColumn,
  // OneToMany,
} from "typeorm";

@Entity()
export class Products extends BaseEntity {
  @PrimaryColumn()
  ProductID!: string;

  @Column()
  ProductName!: string;

  @Column()
  SupplierID!: string;

  @Column()
  CategoryID!: string;

  @Column()
  QuantityPerUnit!: string;

  @Column()
  UnitPrice!: string;

  @Column()
  UnitsInStock!: string;

  @Column()
  UnitsOnOrder!: string;

  @Column()
  ReorderLevel!: string;

  @Column()
  Discontinued!: string;

  // @ManyToOne(() => Suppliers, (suppliers) => suppliers.products)
  // @JoinColumn({ name: "SupplierID" })
  // suppliers!: Suppliers;

  // @ManyToOne(() => Orders, (orders) => orders.products)
  // @JoinColumn({ name: "OrderID" })
  // orders: Orders | undefined;

  // @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.Product)
  // orderDetails!: OrderDetails[];
}
