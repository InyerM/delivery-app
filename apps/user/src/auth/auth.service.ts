import { User } from "@app/entities/default";
import { UserService } from "@app/entities/default/user/user.service";
import { Injectable } from "@nestjs/common";
import { compare } from "bcrypt";
import { SignUpDto } from "./dto/sign-up.dto";

@Injectable()
export class AuthService {
  constructor(private readonly _userService: UserService) {}

  validateUser = async (email: string, pass: string): Promise<User> => {
    const user: User = await this._userService.findOne({ email });
    return compare(pass, user.password) ? user : null;
  };

  signUp(signUpDto: SignUpDto) {
    return this._userService.createOne(signUpDto);
  }
}
