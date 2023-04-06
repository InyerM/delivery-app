import { Column } from "typeorm";
import { BaseEntity } from "./base-entity.entity";

export abstract class ReviewEntity extends BaseEntity {
  @Column({ name: "authorId" })
  authorId: string;

  @Column({ name: "bookingId" })
  bookingId: string;

  @Column({ name: "rating", type: "float" })
  rating: number;

  @Column({ name: "comment", type: "text" })
  comment: string;
}
