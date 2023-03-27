import { AbstractEntity } from "@detabases/common/entities"
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm"
import { UserDefault } from "./user-default.entity"
import { DriverStatusEnum } from "../enums"
import { DriverCalification } from "./driver-calification.entity"

@Entity({ name: "Driver" })
export class Driver extends AbstractEntity {
  @OneToOne(() => UserDefault, (user) => user.id, { cascade: true })
  @JoinColumn({ name: "userId" })
  user: UserDefault

  @Column({ name: "userId" })
  userId: string

  @Column({ name: "licenseFront", type: "varchar", nullable: true })
  licenseFront: string

  @Column({ name: "licenseBack", type: "varchar", nullable: true })
  licenseBack: string

  @Column({ name: "licenseNumber", type: "varchar", nullable: true })
  licenseNumber: string

  @Column({ name: "licenseExpiryDate", type: "date", nullable: true })
  licenseExpiryDate: Date

  @Column({
    name: "driverStatus",
    type: "enum",
    enum: DriverStatusEnum,
    default: DriverStatusEnum.PENDING,
  })
  driverStatus: DriverStatusEnum

  @Column({ name: "driverStatusReason", type: "varchar", nullable: true })
  driverStatusReason: string

  @OneToMany(() => DriverCalification, (driverCalification) => driverCalification.id, {
    cascade: true,
  })
  driverCalifications: number[]
}
