import { Column } from "typeorm";
import { BaseEntity } from "./base-entity.entity";
import { DeviceTypeEnum } from "@app/shared/enums";

export abstract class UserLoginEntity extends BaseEntity {
  @Column({ name: "token", type: "varchar" })
  token: string;

  @Column({ name: "deviceType", type: "enum", enum: DeviceTypeEnum, nullable: true })
  deviceType: DeviceTypeEnum;

  @Column({ name: "deviceDetail", type: "text", nullable: true })
  deviceDetail: string;

  @Column({ name: "deviceToken", type: "varchar", nullable: true })
  deviceToken: string;
}
