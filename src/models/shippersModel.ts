import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Shippers extends BaseEntity {
  @PrimaryColumn()
  ShipperID!: string;

  @Column()
  CompanyName!: string;

  @Column()
  Phone!: string;
}
