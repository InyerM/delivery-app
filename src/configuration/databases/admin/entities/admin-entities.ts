import { MixedList, EntitySchema } from "typeorm"
import { User } from "./user-admin.entity"
import { UserProfile } from "./user-profile.entity"
import { UserLogin } from "./user-login.entity"

export const adminEntities: MixedList<Function | string | EntitySchema> = [
  User,
  UserProfile,
  UserLogin,
]
