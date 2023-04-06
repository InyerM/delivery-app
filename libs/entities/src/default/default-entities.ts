import { MixedList, EntitySchema } from "typeorm";
import { User } from "./user/user.entity";
import { UserProfile } from "./user-profile/user-profile.entity";
import { Shop } from "./shop/shop.entity";
import { Driver } from "./driver/driver.entity";
import { ShopReview } from "./shop-review/shop-review.entity";
import { DriverReview } from "./driver-review/driver-review.entity";
import { UserLogin } from "./user-login/user-login.entity";
import { UserVerifiedInfo } from "./user-verified-info/user-verified-info.entity";
import { Booking } from "./booking/booking.entity";
import { BookingLocation } from "./booking-location/booking-location.entity";

export const defaultEntities: MixedList<Function | string | EntitySchema> = [
  Booking,
  BookingLocation,
  Driver,
  DriverReview,
  Shop,
  ShopReview,
  User,
  UserProfile,
  UserLogin,
  UserVerifiedInfo,
];
