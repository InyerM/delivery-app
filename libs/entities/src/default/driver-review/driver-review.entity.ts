import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Driver } from "../driver/driver.entity";
import { ReviewEntity } from "@app/entities/abstract/review.entity";
import { Booking } from "../booking/booking.entity";
import { User } from "../user/user.entity";
@Entity({ name: "DriverReview" })
export class DriverReview extends ReviewEntity {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "authorId" })
  author: User;

  @OneToOne(() => Booking, (booking) => booking.id, { cascade: true })
  @JoinColumn({ name: "bookingId" })
  booking: Booking;

  @ManyToOne(() => Driver, (driver) => driver.id)
  @JoinColumn({ name: "driverId" })
  driver: Driver;

  @Column({ name: "driverId" })
  driverId: string;
}
