import { Entity, OneToMany, OneToOne, Unique } from "typeorm";
import { UserProfile } from "../user-profile/user-profile.entity";
import { UserLogin } from "../user-login/user-login.entity";
import { Shop } from "../shop/shop.entity";
import { Driver } from "../driver/driver.entity";
import { UserVerifiedInfo } from "../user-verified-info/user-verified-info.entity";
import { ShopReview } from "../shop-review/shop-review.entity";
import { DriverReview } from "../driver-review/driver-review.entity";
import { UserEntity } from "@app/entities/abstract/user.entity";
import { Order } from "../order/order.entity";

@Entity({ name: "User" })
@Unique(["phoneNumber", "phoneCountryPrefix"])
export class User extends UserEntity {
  @OneToOne(() => UserProfile, (userProfile) => userProfile.id, { cascade: true })
  userProfile: UserProfile;

  @OneToOne(() => UserLogin, (userLogin) => userLogin.id, { cascade: true })
  userLogin: UserLogin;

  @OneToOne(() => Shop, (shop) => shop.id)
  shop: Shop;

  @OneToOne(() => Driver, (driver) => driver.id)
  driver: Driver;

  @OneToOne(() => UserVerifiedInfo, (userVerifiedInfo) => userVerifiedInfo.id)
  userVerifiedInfo: UserVerifiedInfo;

  @OneToMany(() => ShopReview, (shopReview) => shopReview.author, {
    cascade: true,
  })
  shopReviews: ShopReview[];

  @OneToMany(() => DriverReview, (driverReviews) => driverReviews.author, {
    cascade: true,
  })
  driverReviews: DriverReview[];

  @OneToMany(() => Order, (order) => order.id)
  orders: Order[];
}
