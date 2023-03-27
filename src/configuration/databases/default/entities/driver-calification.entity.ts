import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { Driver } from "./driver.entity"
import { AbstractEntity } from "@detabases/common/entities"

@Entity({ name: "DriverCalification" })
export class DriverCalification extends AbstractEntity {
  @ManyToOne(() => Driver, (driver) => driver.id, { cascade: true })
  @JoinColumn({ name: "driverId" })
  driver: Driver

  @Column({ name: "driverId" })
  driverId: string

  @Column({ name: "calification", type: "int" })
  calification: number

  @Column({ name: "comment", type: "varchar", length: 255 })
  comment: string
}
