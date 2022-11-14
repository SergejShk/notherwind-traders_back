import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Products {
  @PrimaryColumn()
  productId!: string;

  @Column()
  productName!: string;

  @Column()
  supplier!: string;

  @Column()
  quantityPerUnit!: string;

  @Column()
  unitPrice!: string;

  @Column()
  unitInStock!: string;

  @Column()
  unitInOrder!: string;

  @Column()
  reorderLevel!: string;

  @Column()
  discontinued!: string;
}
