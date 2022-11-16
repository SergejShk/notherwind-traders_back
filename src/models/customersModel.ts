import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Customers extends BaseEntity {
  @PrimaryColumn()
  CustomerID!: string;

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
}
