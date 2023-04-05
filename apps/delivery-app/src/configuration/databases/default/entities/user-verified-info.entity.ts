import { AbstractEntity } from "@detabases/common/entities"
import { Column, Entity, JoinColumn, OneToOne } from "typeorm"
import { User } from "./user.entity"

@Entity({ name: "UserVerifiedInfo" })
export class UserVerifiedInfo extends AbstractEntity {
  @OneToOne(() => User, (user) => user.id, { cascade: true })
  @JoinColumn({ name: "userId" })
  user: User

  @Column({ name: "userId" })
  userId: string

  @Column({ name: "isEmailConfirmed", type: "boolean", default: false })
  isEmailConfirmed: boolean

  @Column({ name: "isPhoneConfirmed", type: "boolean", default: false })
  isPhoneConfirmed: boolean
}
