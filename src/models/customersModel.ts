import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Customers {
  @PrimaryColumn()
  customersId!: string;

  @Column()
  companyName!: string;

  @Column()
  contactTitle!: string;

  @Column()
  address!: string;

  @Column()
  city!: string;

  @Column()
  postalCode!: number;

  @Column()
  region!: string;

  @Column()
  country!: string;

  @Column()
  phone!: string;

  @Column()
  fax!: string;
}
