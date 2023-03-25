import { UserEntity } from "@common-db/entities"
import { Entity, Unique } from "typeorm"

@Entity({ name: "user" })
@Unique(["phoneNumber", "phoneCountryPrefix"])
export class UserAdmin extends UserEntity {}
