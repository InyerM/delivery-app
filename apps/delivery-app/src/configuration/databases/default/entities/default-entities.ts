import { MixedList, EntitySchema } from "typeorm"
import { User } from "./user.entity"
import { UserProfile } from "./user-profile.entity"
import { Shop } from "./shop.entity"
import { Driver } from "./driver.entity"
import { ShopReview } from "./shop-review.entity"
import { DriverReview } from "./driver-review.entity"
import { UserLogin } from "./user-login.entity"
import { UserVerifiedInfo } from "./user-verified-info.entity"
import { Booking } from "./booking.entity"
import { BookingLocation } from "./booking-location.entity"

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
]
