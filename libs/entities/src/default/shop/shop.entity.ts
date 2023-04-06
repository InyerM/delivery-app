import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { User } from "../user/user.entity";
import { ShopReview } from "../shop-review/shop-review.entity";
import { BaseEntity } from "@app/entities/abstract/base-entity.entity";
import { Order } from "../order/order.entity";

@Entity({ name: "Shop" })
export class Shop extends BaseEntity {
  @OneToOne(() => User, (user) => user.id, { cascade: true })
  @JoinColumn({ name: "userId" })
  user: User;

  @Column({ name: "userId" })
  userId: string;

  @Column({ name: "name", type: "varchar", length: 50 })
  name: string;

  @Column({ name: "description", type: "varchar", length: 255 })
  description: string;

  @Column({ name: "deliveryEstimatedTime", type: "varchar", length: 20, nullable: true })
  deliveryEstimatedTime: string;

  @Column({ name: "productType", type: "varchar" })
  productType: number;

  @OneToMany(() => ShopReview, (shopReview) => shopReview.id)
  shopReviews: ShopReview[];

  @OneToMany(() => Order, (order) => order.id)
  orders: Order[];
}
