import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { User } from "../user/user.entity";
import { UserLoginEntity } from "@app/entities/abstract/user-login.entity";

@Entity({ name: "UserLogin" })
export class UserLogin extends UserLoginEntity {
  @ManyToOne(() => User, (user) => user.id, { cascade: true })
  @JoinColumn({ name: "userId" })
  user: User;

  @Column({ name: "userId" })
  userId: string;
}
