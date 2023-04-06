import { AfterUpdate, BeforeInsert, Column } from "typeorm";
import * as bcrypt from "bcrypt";
import { Exclude } from "class-transformer";
import { BaseEntity } from "./base-entity.entity";
import {
  CountryCodeAlpha3Enum,
  PhoneCountryPrefixes,
  UserStatusEnum,
  UserTypeEnum,
} from "@app/shared/enums";

export abstract class UserEntity extends BaseEntity {
  @Column({
    name: "email",
    length: 50,
    type: "varchar",
    unique: true,
  })
  email: string;

  @Exclude()
  @Column({
    name: "password",
    length: 100,
    type: "varchar",
  })
  password: string;

  @Column({
    name: "phoneNumber",
    length: 10,
    type: "varchar",
    nullable: true,
  })
  phoneNumber: string;

  @Column({
    name: "phoneCountryCode",
    type: "enum",
    enum: CountryCodeAlpha3Enum,
    default: CountryCodeAlpha3Enum.COLOMBIA,
  })
  phoneCountryCode: CountryCodeAlpha3Enum;

  @Column({
    name: "phoneCountryPrefix",
    type: "enum",
    enum: PhoneCountryPrefixes,
    default: PhoneCountryPrefixes.COLOMBIA,
  })
  phoneCountryPrefix: PhoneCountryPrefixes;

  @Column({
    name: "lat",
    type: "float",
    nullable: true,
  })
  lat: number;

  @Column({
    name: "lng",
    type: "float",
    nullable: true,
  })
  lng: number;

  @Column({
    name: "status",
    type: "enum",
    enum: UserStatusEnum,
    default: UserStatusEnum.PENDING,
  })
  status: UserStatusEnum;

  @Column({
    name: "userType",
    type: "enum",
    enum: UserTypeEnum,
    default: UserTypeEnum.EATER,
  })
  userType: UserTypeEnum;

  @Column({
    name: "deletedAt",
    type: "timestamp",
    nullable: true,
  })
  deletedAt: Date;

  @Column({
    name: "userTypeUpdatedAt",
    type: "timestamp",
    nullable: true,
  })
  userTypeUpdatedAt: Date;

  @Exclude()
  @BeforeInsert()
  hashPassword = async (): Promise<void> => {
    this.password = await bcrypt.hash(this.password, 10);
  };

  @Exclude()
  @AfterUpdate()
  updateUserType = (): void => {
    this.userTypeUpdatedAt = new Date();
  };
}
