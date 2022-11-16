import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Products {
  @PrimaryColumn()
  ProductID!: string;

  @Column()
  ProductName!: string;

  @Column()
  SupplierID!: string;

  @Column()
  CategoryID!: string;

  @Column()
  QuantityPerUnit!: string;

  @Column()
  UnitPrice!: string;

  @Column()
  UnitsInStock!: string;

  @Column()
  UnitsOnOrder!: string;

  @Column()
  ReorderLevel!: string;

  @Column()
  Discontinued!: string;
}
