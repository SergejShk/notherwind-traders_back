import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Employees {
  @PrimaryColumn()
  EmployeeId!: string;

  @Column()
  Name!: string;

  @Column()
  Title!: string;

  @Column()
  TitleOfCourtesy!: string;

  @Column()
  BirthDate!: string;

  @Column()
  HireDate!: string;

  @Column()
  Address!: string;

  @Column()
  City!: string;

  @Column()
  PostalCode!: number;

  @Column()
  Country!: string;

  @Column()
  HomePhone!: string;

  @Column()
  Extension!: number;

  @Column()
  Notes!: string;

  @Column()
  ReportTo!: string;
}
