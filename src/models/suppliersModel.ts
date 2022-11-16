import { Products } from "models";
import { Entity, BaseEntity, Column, PrimaryColumn, OneToMany } from "typeorm";

@Entity()
export class Suppliers extends BaseEntity {
  @PrimaryColumn()
  SupplierID!: string;

  @Column()
  CompanyName!: string;

  @Column()
  ContactName: string | undefined;

  @Column()
  ContactTitle: string | undefined;

  @Column()
  Address: string | undefined;

  @Column()
  City: string | undefined;

  @Column()
  Region: string | undefined;

  @Column()
  PostalCode: string | undefined;

  @Column()
  Country: string | undefined;

  @Column()
  Phone: string | undefined;

  @Column()
  Fax: string | undefined;

  @Column()
  HomePage: string | undefined;

  @OneToMany(() => Products, (products) => products.suppliers)
  products: Products[] | undefined;
}
