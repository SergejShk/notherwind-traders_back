import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";

@Entity({ name: "employees" })
export class Employees extends BaseEntity {
  @PrimaryColumn({ name: "EmployeeID" })
  EmployeeID!: string;

  @Column({ name: "LastName" })
  LastName!: string;

  @Column({ name: "FirstName" })
  FirstName!: string;

  @Column({ name: "Title" })
  Title!: string;

  @Column({ name: "TitleOfCourtesy" })
  TitleOfCourtesy!: string;

  @Column({ name: "BirthDate" })
  BirthDate!: string;

  @Column({ name: "HireDate" })
  HireDate!: string;

  @Column({ name: "Address" })
  Address!: string;

  @Column({ name: "City" })
  City!: string;

  @Column({ name: "Region" })
  Region!: string;

  @Column({ name: "PostalCode" })
  PostalCode!: string;

  @Column({ name: "Country" })
  Country!: string;

  @Column({ name: "HomePhone" })
  HomePhone!: string;

  @Column({ name: "Extension" })
  Extension!: string;

  @Column({ name: "Notes" })
  Notes!: string;

  @Column({ name: "ReportsTo" })
  ReportsTo!: string;

  @ManyToOne(() => Employees, (employee) => employee.reportsTo)
  @JoinColumn({ name: "ReportsTo" })
  reportsTo!: Employees | undefined;
}
