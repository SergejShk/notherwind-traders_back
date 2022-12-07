import { Shippers } from "./shippers";
import { OrderDetails } from "./orderDetails";
import { Products } from "./products";
import { Customers } from "./customers";
import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity({ name: "orders" })
export class Orders extends BaseEntity {
  @PrimaryColumn({ name: "OrderID" })
  OrderID!: string;

  @Column({ name: "CustomerID" })
  CustomerID!: string;

  @Column({ name: "EmployeeID" })
  EmployeeID!: string;

  @Column({ name: "OrderDate" })
  OrderDate!: string;

  @Column({ name: "RequiredDate" })
  RequiredDate!: string;

  @Column({ name: "ShippedDate" })
  ShippedDate!: string;

  @Column({ name: "ShipVia" })
  ShipVia!: string;

  @Column({ name: "Freight" })
  Freight!: string;

  @Column({ name: "ShipName" })
  ShipName!: string;

  @Column({ name: "ShipAddress" })
  ShipAddress!: string;

  @Column({ name: "ShipCity" })
  ShipCity!: string;

  @Column({ name: "ShipRegion" })
  ShipRegion!: string;

  @Column({ name: "ShipPostalCode" })
  ShipPostalCode!: string;

  @Column({ name: "ShipCountry" })
  ShipCountry!: string;

  @OneToMany(() => OrderDetails, (orderDetails) => orderDetails.order)
  orderDetails!: OrderDetails[];

  @OneToMany(() => Products, (products) => products.orders)
  products: Products[] | undefined;

  @ManyToOne(() => Customers, (customers) => customers.orders)
  @JoinColumn({ name: "CustomerID" })
  customers!: Customers;

  @ManyToOne(() => Shippers, (shippers) => shippers.orders)
  @JoinColumn({ name: "ShipVia" })
  shippers!: Shippers;
}
