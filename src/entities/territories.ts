import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "territories" })
export class Territories extends BaseEntity {
  @PrimaryColumn({ name: "TerritoryID" })
  TerritoryID!: string;

  @Column({ name: "TerritoryDescription" })
  TerritoryDescription!: string;

  @Column({ name: "RegionID" })
  RegionID!: string;
}
