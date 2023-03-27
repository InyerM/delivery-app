import { MixedList, EntitySchema } from "typeorm"
import { UserDefault } from "./user-default.entity"
import { UserProfileDefault } from "./user-profile.entity"

export const defaultEntities: MixedList<Function | string | EntitySchema> = [
  UserDefault,
  UserProfileDefault,
]
