import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";

@Entity()
export class Employees extends BaseEntity {
  @PrimaryColumn()
  EmployeeID!: string;

  @Column()
  LastName!: string;

  @Column()
  FirstName!: string;

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
  Region!: string;

  @Column()
  PostalCode!: string;

  @Column()
  Country!: string;

  @Column()
  HomePhone!: string;

  @Column()
  Extension!: string;

  @Column()
  Notes!: string;

  @Column()
  ReportsTo!: string;

  @ManyToOne(() => Employees, (employee) => employee.reportsTo)
  @JoinColumn({ name: "ReportsTo" })
  reportsTo!: Employees | undefined;
}
