import { Module } from "@nestjs/common";
import { UserModule } from "./default/user/user.module";
import { UserLoginModule } from "./default/user-login/user-login.module";

@Module({
  imports: [UserModule, UserLoginModule],
  exports: [UserModule, UserLoginModule],
})
export class EntitiesModule {}
