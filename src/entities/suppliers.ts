import { Products } from "./products";
import { Entity, BaseEntity, Column, PrimaryColumn, OneToMany } from "typeorm";

@Entity({ name: "suppliers" })
export class Suppliers extends BaseEntity {
  @PrimaryColumn({ name: "SupplierID" })
  SupplierID!: string;

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

  @Column({ name: "HomePage" })
  HomePage!: string;
  products: any;

  @OneToMany(() => Products, (product) => product.suppliers)
  product!: Products[];
}
