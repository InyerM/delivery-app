import { MixedList, EntitySchema } from "typeorm"
import { UserDefault } from "./user-default.entity"
import { UserProfileDefault } from "./user-profile.entity"
import { Shop } from "./shop.entity"
import { Driver } from "./driver.entity"
import { ShopCalification } from "./shop-calification.entity"
import { DriverCalification } from "./driver-calification.entity"

export const defaultEntities: MixedList<Function | string | EntitySchema> = [
  Driver,
  DriverCalification,
  Shop,
  ShopCalification,
  UserDefault,
  UserProfileDefault,
]
