import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

export const UseToken = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request: Request = ctx.switchToHttp().getRequest();
  return request.headers.authorization?.split(" ").at(-1);
});
