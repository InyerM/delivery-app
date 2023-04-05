import { UserProfileEntity } from "@detabases/common/entities"
import { Column, Entity, JoinColumn, OneToOne } from "typeorm"
import { User } from "./user-admin.entity"

@Entity({ name: "UserProfile" })
export class UserProfile extends UserProfileEntity {
  @OneToOne(() => User, (user) => user.id, { cascade: true })
  @JoinColumn({ name: "userId" })
  user: User

  @Column({ name: "userId" })
  userId: string
}
