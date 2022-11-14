import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Employees {
  @PrimaryColumn()
  employeeId!: string;

  @Column()
  name!: string;

  @Column()
  title!: string;

  @Column()
  titleOfCourtesy!: string;

  @Column()
  birthDate!: string;

  @Column()
  hireDate!: string;

  @Column()
  address!: string;

  @Column()
  city!: string;

  @Column()
  postalCode!: number;

  @Column()
  country!: string;

  @Column()
  homePhone!: string;

  @Column()
  extension!: number;

  @Column()
  notes!: string;

  @Column()
  reportTo!: string;
}
