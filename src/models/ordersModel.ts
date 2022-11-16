import { Products, Customers } from "models";
import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  OneToMany,
  OneToOne,
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
  ShipVia!: number;

  @Column()
  Freight!: number;

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

  @OneToMany(() => Products, (products) => products.orders)
  products: Products[] | undefined;

  @OneToOne(() => Customers)
  @JoinColumn()
  orders!: Customers;
}
