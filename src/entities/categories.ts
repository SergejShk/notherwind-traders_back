import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Categories extends BaseEntity {
  @PrimaryColumn()
  CategoryID!: string;

  @Column()
  CategoryName!: string;

  @Column()
  Description!: string;
}
