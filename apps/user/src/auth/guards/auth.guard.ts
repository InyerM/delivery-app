import { UserService } from "@app/entities/default/user/user.service";
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly _jwtService: JwtService,
    private readonly _userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) return false;
      const { id } = await this._jwtService.verify(token);
      req.user = await this._userService.findOne(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}
