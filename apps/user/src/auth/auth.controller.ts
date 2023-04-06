import { User } from "@app/entities/default";
import { UseUser } from "@app/shared/decorators";
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto/sign-up.dto";
import { LocalAuthGuard } from "./guards/local-auth.guard";

@Controller("auth")
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@UseUser() user: User) {
    return user;
  }

  @Post("sign-up")
  async signUp(@Body() signUpDto: SignUpDto) {
    return this._authService.signUp(signUpDto);
  }
}
