import { BaseEntity } from "@app/entities/abstract/base-entity.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { User } from "../user/user.entity";
import { Shop } from "../shop/shop.entity";
import { OrderStatusEnum } from "@app/shared/enums/order.enums";

@Entity({ name: "Order" })
export class Order extends BaseEntity {
  @ManyToOne(() => User, (user) => user.id, { cascade: true })
  user: User;

  @ManyToOne(() => Shop, (shop) => shop.id, { cascade: true })
  shop: Shop;

  @Column({ name: "orderStatus", type: "enum", enum: OrderStatusEnum })
  orderStatus: OrderStatusEnum;
}
