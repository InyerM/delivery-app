import { UserEntity } from "@common-db/entities"
import { Entity } from "typeorm"

@Entity({ name: "user" })
export class UserDefault extends UserEntity {}
