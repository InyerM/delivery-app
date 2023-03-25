import { Column } from "typeorm"
import { AbstractEntity } from "./abstract.entity"
import { CurrencyEnum, LanguagesEnum } from "@common/enums"

export abstract class UserProfileEntity extends AbstractEntity {
  @Column({
    name: "firstName",
    length: 50,
    type: "varchar",
  })
  firstName: string

  @Column({
    name: "lastName",
    length: 50,
    type: "varchar",
  })
  lastName: string

  @Column({
    name: "secondName",
    length: 50,
    type: "varchar",
    nullable: true,
  })
  secondName: string

  @Column({
    name: "secondLastName",
    length: 50,
    type: "varchar",
    nullable: true,
  })
  secondLastName: string

  fullName: string

  @Column({
    name: "picture",
    length: 100,
    type: "varchar",
    nullable: true,
  })
  picture: string

  @Column({
    name: "state",
    type: "varchar",
    length: 50,
    nullable: true,
  })
  state: string

  @Column({
    name: "city",
    type: "varchar",
    length: 50,
    nullable: true,
  })
  city: string

  @Column({
    name: "address",
    type: "varchar",
    length: 100,
    nullable: true,
  })
  address: string

  @Column({
    name: "zipCode",
    type: "varchar",
    length: 10,
    nullable: true,
  })
  zipCode: string

  @Column({
    name: "country",
    type: "varchar",
    length: 50,
    nullable: true,
  })
  country: string

  @Column({
    name: "currency",
    type: "enum",
    enum: CurrencyEnum,
    default: CurrencyEnum.COP,
  })
  currency: CurrencyEnum

  @Column({
    name: "language",
    type: "enum",
    enum: LanguagesEnum,
    default: LanguagesEnum.SPANISH,
  })
  language: LanguagesEnum

  @Column({
    name: "cardLastFour",
    type: "varchar",
    length: 4,
    nullable: true,
  })
  cardLastFour: string

  @Column({
    name: "cardToken",
    type: "varchar",
    length: 255,
    nullable: true,
  })
  cardToken: string

  @Column({
    name: "walletBalance",
    type: "float",
    default: 0,
  })
  walletBalance: number

  @Column({
    name: "walletUsed",
    type: "float",
    default: 0,
  })
  walletUsed: number

  @Column({
    name: "preferredPaymentMethodId",
    type: "varchar",
    length: 50,
    nullable: true,
  })
  preferredPaymentMethod: string
}
