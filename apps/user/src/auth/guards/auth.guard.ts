import { UserService } from "@app/entities/default/user/user.service";
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { DeviceDetails, UserPayload } from "../auth.types";
import { UserLogin } from "@app/entities/default";
import { UserLoginService } from "@app/entities/default/user-login/user-login.service";
import { isJWT } from "class-validator";
import { DeviceTypeEnum } from "../enums";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly _jwtService: JwtService,
    private readonly _userService: UserService,
    private readonly _userLoginService: UserLoginService,
  ) {}

  private _getDeviceData = (request: Request): DeviceDetails => {
    const { headers } = request;
    const { "user-agent": userAgent } = headers;
    return {
      deviceType: DeviceTypeEnum[userAgent],
      deviceDetail: headers["device-detail"] as string,
      deviceToken: headers["device-token"] as string,
    }
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    const token: string = req.headers.authorization?.split(" ").at(-1);
    const isJwtToken: boolean = isJWT(token);
    if (!isJwtToken) throw new UnauthorizedException("Your token is not valid");
    const { id }: UserPayload = await this._jwtService.verifyAsync<UserPayload>(token);
    req.user = await this._userService.findOneBy({ id });
    const userSession: UserLogin = await this._userLoginService.findOneBy({ token, userId: id });
    if (!userSession) throw new UnauthorizedException("You don't have any active session");
    const deviceDetails: DeviceDetails = this._getDeviceData(req);
    await this._userLoginService.update(userSession.id, { ...userSession, ...deviceDetails })
    return true;
  }
}
