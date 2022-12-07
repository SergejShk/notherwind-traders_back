import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "categories" })
export class Categories extends BaseEntity {
  @PrimaryColumn({ name: "CategoryID" })
  CategoryID!: string;

  @Column({ name: "CategoryName" })
  CategoryName!: string;

  @Column({ name: "Description" })
  Description!: string;
}
