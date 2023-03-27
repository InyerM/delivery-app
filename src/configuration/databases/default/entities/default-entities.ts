import { MixedList, EntitySchema } from "typeorm"
import { User } from "./user.entity"
import { UserProfile } from "./user-profile.entity"
import { Shop } from "./shop.entity"
import { Driver } from "./driver.entity"
import { ShopCalification } from "./shop-calification.entity"
import { DriverCalification } from "./driver-calification.entity"
import { UserLogin } from "./user-login.entity"

export const defaultEntities: MixedList<Function | string | EntitySchema> = [
  Driver,
  DriverCalification,
  Shop,
  ShopCalification,
  User,
  UserProfile,
  UserLogin,
]
