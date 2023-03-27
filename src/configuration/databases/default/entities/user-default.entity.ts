import { UserEntity } from "@common-db/entities"
import { Entity, OneToOne, Unique } from "typeorm"
import { UserProfileDefault } from "./user-profile.entity"

@Entity({ name: "User" })
@Unique(["phoneNumber", "phoneCountryPrefix"])
export class UserDefault extends UserEntity {
  @OneToOne(() => UserProfileDefault, (userProfile) => userProfile.id, { cascade: true })
  userProfile: UserProfileDefault
}
