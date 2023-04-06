import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { User } from "../user/user.entity";
import { BaseEntity } from "@app/entities/abstract";

@Entity({ name: "UserVerifiedInfo" })
export class UserVerifiedInfo extends BaseEntity {
  @OneToOne(() => User, (user) => user.id, { cascade: true })
  @JoinColumn({ name: "userId" })
  user: User;

  @Column({ name: "userId" })
  userId: string;

  @Column({ name: "isEmailConfirmed", type: "boolean", default: false })
  isEmailConfirmed: boolean;

  @Column({ name: "isPhoneConfirmed", type: "boolean", default: false })
  isPhoneConfirmed: boolean;
}
