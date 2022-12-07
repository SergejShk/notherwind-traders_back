import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Regions extends BaseEntity {
  @PrimaryColumn()
  RegionID!: string;

  @Column()
  RegionDescription!: string;
}
