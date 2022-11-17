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

  @OneToOne(() => Employees, (reportsTo) => reportsTo.EmployeeID)
  @JoinColumn({ name: "EmployeeID" })
  reportsTo!: Employees | undefined;
}
