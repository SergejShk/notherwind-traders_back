import { Products } from "./productsModel";
import { Entity, BaseEntity, Column, PrimaryColumn, OneToMany } from "typeorm";

@Entity()
export class Suppliers extends BaseEntity {
  @PrimaryColumn()
  SupplierID!: string;

  @Column()
  CompanyName!: string;

  @Column()
  ContactName!: string;

  @Column()
  ContactTitle!: string;

  @Column()
  Address!: string;

  @Column()
  City!: string;

  @Column()
  Region!: string;

  @Column()
  PostalCode!: string;

  @Column()
  Country!: string;

  @Column()
  Phone!: string;

  @Column()
  Fax!: string;

  @Column()
  HomePage!: string;
  products: any;

  @OneToMany(() => Products, (product) => product.suppliers)
  product!: Products[];
}
