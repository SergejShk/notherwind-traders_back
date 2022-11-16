import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Orders {
  @PrimaryColumn()
  OrderID!: string;

  @Column()
  CustomerID!: string;

  @Column()
  EmployeeID!: string;

  @Column()
  OrderDate!: string;

  @Column()
  RequiredDate!: string;

  @Column()
  ShippedDate!: string;

  @Column()
  ShipVia!: number;

  @Column()
  Freight!: number;

  @Column()
  ShipName!: string;

  @Column()
  ShipAddress!: string;

  @Column()
  ShipCity!: string;

  @Column()
  ShipRegion!: string;

  @Column()
  ShipPostalCode!: string;

  @Column()
  ShipCountry!: string;
}
