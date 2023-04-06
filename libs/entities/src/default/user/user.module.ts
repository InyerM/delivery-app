import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User], "default")],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
