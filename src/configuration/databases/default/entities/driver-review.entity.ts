import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { Driver } from "./driver.entity"
import { ReviewEntity } from "./abstract/review.entity"

@Entity({ name: "DriverReview" })
export class DriverReview extends ReviewEntity {
  @ManyToOne(() => Driver, (driver) => driver.id)
  @JoinColumn({ name: "driverId" })
  driver: Driver

  @Column({ name: "driverId" })
  driverId: string
}
