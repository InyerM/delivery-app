import { UserEntity } from "@common-db/entities"
import { Entity, Unique } from "typeorm"

@Entity({ name: "User" })
@Unique(["phoneNumber", "phoneCountryPrefix"])
export class UserDefault extends UserEntity {}
