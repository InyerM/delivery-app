import { UserProfileEntity } from "@detabases/common/entities"
import { Column, Entity, JoinColumn, OneToOne } from "typeorm"
import { UserAdmin } from "./user-admin.entity"

@Entity({ name: "UserProfile" })
export class UserProfileAdmin extends UserProfileEntity {
  @OneToOne(() => UserAdmin, (user) => user.id, { cascade: true })
  @JoinColumn({ name: "userId" })
  user: UserAdmin

  @Column({ name: "userId" })
  userId: string
}
