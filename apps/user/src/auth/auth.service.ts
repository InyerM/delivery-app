import { User, UserLogin } from "@app/entities/default";
import { UserService } from "@app/entities/default/user/user.service";
import { BadRequestException, Injectable } from "@nestjs/common";
import { compare } from "bcrypt";
import { SignUpDto } from "./dto/sign-up.dto";
import { LoginResponse } from "./auth.types";
import { JwtService } from "@nestjs/jwt";
import { JWT_EXPIRES_IN } from "./auth.constants";
import { UserLoginService } from "@app/entities/default/user-login/user-login.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly _userService: UserService,
    private readonly _jwtService: JwtService,
    private readonly _userLoginService: UserLoginService,
  ) {}

  validateUser = async (email: string, pass: string): Promise<User> => {
    const user: User = await this._userService.findOneBy({ email });
    return compare(pass, user.password) ? user : null;
  };

  async logout(user: User, token: string): Promise<void> {
    const session: UserLogin = await this._userLoginService.findOneBy({ token, userId: user.id });
    if (!session) throw new BadRequestException("There is no active session");
    await this._userLoginService.delete(session.id);
  }

  async login(user: User): Promise<LoginResponse> {
    const token: string = await this._jwtService.signAsync({ email: user.email, id: user.id });
    await this._userLoginService.create({ token, userId: user.id });
    return {
      token,
      expiresIn: JWT_EXPIRES_IN,
    };
  }

  signUp(signUpDto: SignUpDto) {
    return this._userService.createOne(signUpDto);
  }
}
