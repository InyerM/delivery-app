import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"
import { UserStatusEnum, UserTypeEnum } from "@common-db/enums"

export abstract class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid", {
    name: "id",
  })
  id: string

  @Column({
    name: "email",
    length: 50,
    type: "varchar",
    unique: true,
  })
  email: string

  @Column({
    name: "password",
    length: 100,
    type: "varchar",
  })
  password: string

  @Column({
    name: "phoneNumber",
    length: 10,
    type: "varchar",
    nullable: true,
  })
  phoneNumber: string

  @Column({
    name: "phoneCountryCode",
    length: 5,
    type: "varchar",
    nullable: true,
  })
  phoneCountryCode: string

  @Column({
    name: "phoneDialCode",
    length: 5,
    type: "varchar",
    nullable: true,
  })
  phoneDialCode: string

  @Column({
    name: "lat",
    type: "float",
    nullable: true,
  })
  lat: number

  @Column({
    name: "lng",
    type: "float",
    nullable: true,
  })
  lng: number

  @Column({
    name: "status",
    type: "enum",
    enum: UserStatusEnum,
    default: UserStatusEnum.PENDING,
  })
  status: UserStatusEnum

  @Column({
    name: "userType",
    type: "enum",
    enum: UserTypeEnum,
  })
  userType: UserTypeEnum

  @Column({
    name: "deletedAt",
    type: "timestamp",
    nullable: true,
  })
  deletedAt: Date

  @Column({
    name: "userTypeUpdatedAt",
    type: "timestamp",
    nullable: true,
  })
  userTypeUpdatedAt: Date

  @CreateDateColumn({
    name: "createdAt",
    type: "timestamp",
  })
  createdAt: Date

  @UpdateDateColumn({
    name: "updatedAt",
    type: "timestamp",
  })
  updatedAt: Date
}
