import { Orders } from './ordersModel';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  PrimaryColumn,
  OneToMany,
} from "typeorm";

@Entity()
export class Shippers extends BaseEntity {
  @PrimaryColumn()
  ShipperID!: string;

  @Column()
  CompanyName!: string;

  @Column()
  Phone!: string;

  @OneToMany(() => Orders, (orders) => orders.shippers)
  @JoinColumn({ name: "ShipperID" })
  orders!: Orders[];
}
