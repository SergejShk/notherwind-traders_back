import { Suppliers, Orders } from "models";
import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity()
export class Products extends BaseEntity {
  @PrimaryColumn()
  ProductID!: string;

  @Column()
  ProductName!: string;

  @Column()
  SupplierID: string | undefined;

  @Column()
  CategoryID: string | undefined;

  @Column()
  QuantityPerUnit: string | undefined;

  @Column()
  UnitPrice: string | undefined;

  @Column()
  UnitsInStock: string | undefined;

  @Column()
  UnitsOnOrder: string | undefined;

  @Column()
  ReorderLevel: string | undefined;

  @Column()
  Discontinued: string | undefined;

  @ManyToOne(() => Suppliers, (suppliers) => suppliers.products)
  @JoinColumn({ name: "SupplierID" })
  suppliers!: Suppliers;

  @ManyToOne(() => Orders, (orders) => orders.products)
  @JoinColumn({ name: "OrderID" })
  orders: Orders[] | undefined;
}
