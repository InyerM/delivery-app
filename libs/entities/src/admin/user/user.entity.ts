import { UserEntity } from "@app/entities/abstract/user.entity";
import { Entity, OneToOne, Unique } from "typeorm";
import { UserProfile } from "../user-profile/user-profile.entity";

@Entity({ name: "User" })
@Unique(["phoneNumber", "phoneCountryPrefix"])
export class User extends UserEntity {
  @OneToOne(() => UserProfile, (userProfile) => userProfile.id, { cascade: true })
  userProfile: UserProfile;
}
