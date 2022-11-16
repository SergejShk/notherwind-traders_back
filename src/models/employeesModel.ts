import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";

@Entity()
export class Employees extends BaseEntity {
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

  @OneToOne(() => Employees, (reportsTo) => reportsTo.EmployeeId)
  @JoinColumn({ name: "EmployeeID" })
  ReportsTo: Employees | undefined;
}
