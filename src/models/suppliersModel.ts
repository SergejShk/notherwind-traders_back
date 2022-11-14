import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Suppliers {
  @PrimaryColumn()
  supplierId!: string;;

  @Column()
  companyName!: string;

  @Column()
  contactName!: string;

  @Column()
  contactTitle!: string;

  @Column()
  address!: string;

  @Column()
  city!: string;

  @Column()
  region!: string;

  @Column()
  postalCoe!: string;

  @Column()
  country!: string;

  @Column()
  phone!: string;
}
