import { MixedList, EntitySchema } from "typeorm"
import { UserDefault } from "./user-default.entity"

export const defaultEntities: MixedList<Function | string | EntitySchema> = [UserDefault]
