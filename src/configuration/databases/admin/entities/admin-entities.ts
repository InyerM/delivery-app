import { MixedList, EntitySchema } from "typeorm"
import { UserAdmin } from "./user-admin.entity"
import { UserProfileAdmin } from "./user-profile.entity"

export const adminEntities: MixedList<Function | string | EntitySchema> = [
  UserAdmin,
  UserProfileAdmin,
]
