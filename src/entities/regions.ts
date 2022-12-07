import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "regions" })
export class Regions extends BaseEntity {
  @PrimaryColumn({ name: "RegionID" })
  RegionID!: string;

  @Column({ name: "RegionDescription" })
  RegionDescription!: string;
}
