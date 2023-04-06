import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Shop } from "../shop/shop.entity";
import { ReviewEntity } from "@app/entities/abstract/review.entity";
import { Booking } from "../booking/booking.entity";
import { User } from "../user/user.entity";

@Entity({ name: "ShopReview" })
export class ShopReview extends ReviewEntity {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "authorId" })
  author: User;

  @OneToOne(() => Booking, (booking) => booking.id, { cascade: true })
  @JoinColumn({ name: "bookingId" })
  booking: Booking;

  @ManyToOne(() => Shop, (shop) => shop.id)
  @JoinColumn({ name: "shopId" })
  shop: Shop;

  @Column({ name: "shopId" })
  shopId: string;
}
