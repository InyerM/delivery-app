import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { User } from "@app/entities/default";
import { validateCredentials } from "@app/shared";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private _authService: AuthService) {
    super({ usernameField: "email" });
  }

  async validate(email: string, password: string): Promise<User> {
    const { isEmailValid, isPasswordValid, message } = validateCredentials({ email, password });
    if (!isEmailValid || !isPasswordValid)
      throw new BadRequestException(message.filter((message) => message));
    const user: User = await this._authService.validateUser(email, password);
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
