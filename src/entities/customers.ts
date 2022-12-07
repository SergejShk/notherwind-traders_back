import { Entity, BaseEntity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Orders } from "./orders";

@Entity({ name: "customers" })
export class Customers extends BaseEntity {
  @PrimaryColumn({ name: "CustomerID" })
  CustomerID!: string;

  @Column({ name: "CompanyName" })
  CompanyName!: string;

  @Column({ name: "ContactName" })
  ContactName!: string;

  @Column({ name: "ContactTitle" })
  ContactTitle!: string;

  @Column({ name: "Address" })
  Address!: string;

  @Column({ name: "City" })
  City!: string;

  @Column({ name: "Region" })
  Region!: string;

  @Column({ name: "PostalCode" })
  PostalCode!: string;

  @Column({ name: "Country" })
  Country!: string;

  @Column({ name: "Phone" })
  Phone!: string;

  @Column({ name: "Fax" })
  Fax!: string;

  @OneToMany(() => Orders, (orders) => orders.customers)
  orders!: Orders[];
}
