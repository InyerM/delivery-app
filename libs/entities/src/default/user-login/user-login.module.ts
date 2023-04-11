import { UserLoginService } from "./user-login.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserLogin } from "../user-login/user-login.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserLogin], "default")],
  providers: [UserLoginService],
  exports: [UserLoginService],
})
export class UserLoginModule {}
