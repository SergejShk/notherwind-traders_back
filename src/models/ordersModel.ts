import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Orders {
  @PrimaryColumn()
  orderId!: string;

  @Column()
  customerId!: string;

  @Column()
  shipName!: string;

  @Column()
  totalProducts!: number;

  @Column()
  totalQuantity!: number;

  @Column()
  totalPrice!: number;

  @Column()
  totalDiscount!: number;

  @Column()
  shipVia!: string;

  @Column()
  freight!: number;

  @Column()
  orderDate!: string;

  @Column()
  requiredDate!: string;

  @Column()
  shippedDate!: string;

  @Column()
  shipCity!: string;

  @Column()
  shipRegion!: string;

  @Column()
  shipPostalCode!: number;

  @Column()
  shipCountry!: string;
}
