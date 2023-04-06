import { UserLoginEntity } from "@app/entities/abstract";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { User } from "../user/user.entity";

@Entity({ name: "UserLogin" })
export class UserLogin extends UserLoginEntity {
  @OneToOne(() => User, (user) => user.id, { cascade: true })
  @JoinColumn({ name: "userId" })
  user: User;

  @Column({ name: "userId" })
  userId: string;
}
