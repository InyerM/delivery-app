import { UserProfileEntity } from "@detabases/common/entities"
import { Column, Entity, JoinColumn, OneToOne } from "typeorm"
import { UserAdmin } from "./user-admin.entity"

@Entity({ name: "UserProfile" })
export class UserProfileAdmin extends UserProfileEntity {
  @OneToOne(() => UserAdmin, (userAdmin) => userAdmin.id)
  @JoinColumn({ name: "userId" })
  user: UserAdmin

  @Column({ name: "userId" })
  userId: string
}
