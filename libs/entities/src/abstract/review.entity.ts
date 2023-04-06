import { Column, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { AbstractEntity } from "@app/shared/entities/";
import { User, Booking } from "@detabases/default/entities";

export abstract class ReviewEntity extends AbstractEntity {
  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: "authorId" })
  author: User;

  @OneToOne(() => Booking, (booking) => booking.id, { cascade: true })
  @JoinColumn({ name: "bookingId" })
  booking: Booking;

  @Column({ name: "authorId" })
  authorId: string;

  @Column({ name: "bookingId" })
  bookingId: string;

  @Column({ name: "calification", type: "float" })
  calification: number;

  @Column({ name: "comment", type: "text" })
  comment: string;
}
