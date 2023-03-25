import { MixedList, EntitySchema } from "typeorm"
import { UserAdmin } from "./user-admin.entity"
console.log(UserAdmin)

export const adminEntities: MixedList<Function | string | EntitySchema> = [UserAdmin]
