import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmployeeTerritories extends BaseEntity {
  @PrimaryGeneratedColumn()
  OrderDetailsID!: number;

  @Column()
  TerritoryID!: string;

  @Column()
  EmployeeID!: string;
}
