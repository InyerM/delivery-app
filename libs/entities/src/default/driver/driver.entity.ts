import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { User } from "../user/user.entity";
import { DriverReview } from "../driver-review/driver-review.entity";
import { BaseEntity } from "@app/entities/abstract/base-entity.entity";
import { DriverStatusEnum } from "@app/shared/enums";

@Entity({ name: "Driver" })
export class Driver extends BaseEntity {
  @OneToOne(() => User, (user) => user.id, { cascade: true })
  @JoinColumn({ name: "userId" })
  user: User;

  @Column({ name: "userId" })
  userId: string;

  @Column({ name: "licenseFront", type: "varchar", nullable: true })
  licenseFront: string;

  @Column({ name: "licenseBack", type: "varchar", nullable: true })
  licenseBack: string;

  @Column({ name: "licenseNumber", type: "varchar", nullable: true })
  licenseNumber: string;

  @Column({ name: "licenseExpiryDate", type: "date", nullable: true })
  licenseExpiryDate: Date;

  @Column({
    name: "driverStatus",
    type: "enum",
    enum: DriverStatusEnum,
    default: DriverStatusEnum.PENDING,
  })
  driverStatus: DriverStatusEnum;

  @Column({ name: "driverStatusReason", type: "varchar", nullable: true })
  driverStatusReason: string;

  @OneToMany(() => DriverReview, (driverReviews) => driverReviews.id, {
    cascade: true,
  })
  driverReviews: DriverReview[];
}
