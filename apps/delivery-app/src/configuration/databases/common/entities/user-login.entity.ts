import { Column } from "typeorm"
import { AbstractEntity } from "./abstract.entity"
import { DeviceTypeEnum } from "../enums"

export abstract class UserLoginEntity extends AbstractEntity {
  @Column({ name: "token", type: "varchar" })
  token: string

  @Column({ name: "deviceType", type: "enum", enum: DeviceTypeEnum, nullable: true })
  deviceType: DeviceTypeEnum

  @Column({ name: "deviceDetail", type: "text", nullable: true })
  deviceDetail: string

  @Column({ name: "deviceToken", type: "varchar", nullable: true })
  deviceToken: string
}
