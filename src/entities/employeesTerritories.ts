import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "emplyee_territories" })
export class EmployeeTerritories extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "OrderDetailsID" })
  OrderDetailsID!: number;

  @Column({ name: "TerritoryID" })
  TerritoryID!: string;

  @Column({ name: "EmployeeID" })
  EmployeeID!: string;
}
