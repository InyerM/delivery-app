import { UserEntity } from "@common-db/entities"
import { Entity, OneToOne, Unique } from "typeorm"
import { UserProfile } from "./user-profile.entity"
import { UserLogin } from "./user-login.entity"
import { Shop } from "./shop.entity"
import { Driver } from "./driver.entity"
import { UserVerifiedInfo } from "./user-verified-info.entity"

@Entity({ name: "User" })
@Unique(["phoneNumber", "phoneCountryPrefix"])
export class User extends UserEntity {
  @OneToOne(() => UserProfile, (userProfile) => userProfile.id, { cascade: true })
  userProfile: UserProfile

  @OneToOne(() => UserLogin, (userLogin) => userLogin.id, { cascade: true })
  userLogin: UserLogin

  @OneToOne(() => Shop, (shop) => shop.id)
  shop: Shop

  @OneToOne(() => Driver, (driver) => driver.id)
  driver: Driver

  @OneToOne(() => UserVerifiedInfo, (userVerifiedInfo) => userVerifiedInfo.id)
  userVerifiedInfo: UserVerifiedInfo
}
