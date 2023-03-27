import { Column, JoinColumn, OneToOne } from "typeorm"
import { AbstractEntity } from "./abstract.entity"
import { User } from "@detabases/default/entities"

export abstract class ReviewEntity extends AbstractEntity {
  @OneToOne(() => User, (user) => user.id, { cascade: true })
  @JoinColumn({ name: "authorId" })
  author: User

  @Column({ name: "authorId" })
  authorId: string

  // @OneToOne(() => Booking, (booking) => booking.id, { cascade: true })
  // @JoinColumn({ name: "bookingId" })
  // booking: Booking

  @Column({ name: "bookingId" })
  bookingId: string

  @Column({ name: "calification", type: "float" })
  calification: number

  @Column({ name: "comment", type: "text" })
  comment: string
}
