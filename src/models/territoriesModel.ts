import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Territories extends BaseEntity {
  @PrimaryColumn()
  TerritoryID!: string;

  @Column()
  TerritoryDescription!: string;

  @Column()
  RegionID!: string;
}
