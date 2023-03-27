import { UserEntity } from "@common-db/entities"
import { Entity, OneToOne, Unique } from "typeorm"
import { UserProfileAdmin } from "./user-profile.entity"

@Entity({ name: "User" })
@Unique(["phoneNumber", "phoneCountryPrefix"])
export class UserAdmin extends UserEntity {
  @OneToOne(() => UserProfileAdmin, (userProfile) => userProfile.id, { cascade: true })
  userProfile: UserProfileAdmin
}
