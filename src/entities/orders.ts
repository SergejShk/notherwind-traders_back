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

@Entity()
export class Orders extends BaseEntity {
  @PrimaryColumn()
  OrderID!: string;

  @Column()
  CustomerID!: string;

  @Column()
  EmployeeID!: string;

  @Column()
  OrderDate!: string;

  @Column()
  RequiredDate!: string;

  @Column()
  ShippedDate!: string;

  @Column()
  ShipVia!: string;

  @Column()
  Freight!: string;

  @Column()
  ShipName!: string;

  @Column()
  ShipAddress!: string;

  @Column()
  ShipCity!: string;

  @Column()
  ShipRegion!: string;

  @Column()
  ShipPostalCode!: string;

  @Column()
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
