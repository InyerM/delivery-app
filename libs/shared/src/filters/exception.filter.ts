import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Inject,
} from "@nestjs/common";
import { HttpArgumentsHost } from "@nestjs/common/interfaces";
import { TypeORMError } from "typeorm";
import { LoggerService } from "../logger/logger.service";
import { Request, Response } from "express";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(@Inject(LoggerService) private readonly _loggerService: LoggerService) {}
  catch(exception: HttpException | TypeORMError | any, host: ArgumentsHost) {
    const ctx: HttpArgumentsHost = host.switchToHttp();
    const response: Response = ctx.getResponse();
    const request: Request = ctx.getRequest();

    const status: number =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const message: string | string[] =
      exception?.response?.message || exception?.message || exception;
    this._loggerService.error({ message, stack: exception.stack, context: request.originalUrl });
    response.status(status).json({
      message,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
