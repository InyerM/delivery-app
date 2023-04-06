import { MixedList, EntitySchema } from "typeorm";
import { User } from "./user/user.entity";
import { UserLogin } from "./user-login/user-login.entity";
import { UserProfile } from "./user-profile/user-profile.entity";

export const adminEntities: MixedList<Function | string | EntitySchema> = [
  User,
  UserLogin,
  UserProfile,
];
