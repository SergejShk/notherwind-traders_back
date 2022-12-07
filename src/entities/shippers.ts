import { Orders } from "./orders";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  PrimaryColumn,
  OneToMany,
} from "typeorm";

@Entity({ name: "shippers" })
export class Shippers extends BaseEntity {
  @PrimaryColumn({ name: "ShipperID" })
  ShipperID!: string;

  @Column({ name: "CompanyName" })
  CompanyName!: string;

  @Column({ name: "Phone" })
  Phone!: string;

  @OneToMany(() => Orders, (orders) => orders.shippers)
  @JoinColumn({ name: "ShipperID" })
  orders!: Orders[];
}
