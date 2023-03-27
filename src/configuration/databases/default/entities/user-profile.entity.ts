import { UserProfileEntity } from "@detabases/common/entities"
import { Column, Entity, JoinColumn, OneToOne } from "typeorm"
import { UserDefault } from "./user-default.entity"

@Entity({ name: "UserProfile" })
export class UserProfileDefault extends UserProfileEntity {
  @OneToOne(() => UserDefault, (userDefault) => userDefault.id)
  @JoinColumn({ name: "userId" })
  user: UserDefault

  @Column({ name: "userId" })
  userId: string
}
