import { User } from "@app/entities/default";
import { UseToken, UseUser } from "@app/shared/decorators";
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
import { LoginResponse } from "./auth.types";
import { AuthGuard } from "./guards";

@Controller("auth")
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@UseUser() user: User): Promise<LoginResponse> {
    return this._authService.login(user);
  }

  @Post("sign-up")
  async signUp(@Body() signUpDto: SignUpDto) {
    return this._authService.signUp(signUpDto);
  }

  @UseGuards(AuthGuard)
  @Post("logout")
  async logout(@UseUser() user: User, @UseToken() token: string): Promise<void> {
    return this._authService.logout(user, token);
  }
}
