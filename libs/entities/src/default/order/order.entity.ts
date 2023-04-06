import { BaseEntity } from "@app/entities/abstract/base-entity.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { User } from "../user/user.entity";
import { Shop } from "../shop/shop.entity";
import { OrderStatusEnum } from "@app/shared/enums/order.enums";
import { Booking } from "../booking/booking.entity";

@Entity({ name: "Order" })
export class Order extends BaseEntity {
  @ManyToOne(() => User, (user) => user.id, { cascade: true })
  @JoinColumn({ name: "userId" })
  user: User;

  @ManyToOne(() => Shop, (shop) => shop.id, { cascade: true })
  @JoinColumn({ name: "shopId" })
  shop: Shop;

  @OneToOne(() => Booking, (booking) => booking.id)
  booking: Booking;

  @Column({ name: "orderStatus", type: "enum", enum: OrderStatusEnum })
  orderStatus: OrderStatusEnum;
}
