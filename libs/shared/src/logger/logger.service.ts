import { Injectable, ConsoleLogger } from "@nestjs/common";

type Params = {
  message: string | string[];
  stack?: string;
  context?: any;
};

@Injectable()
export class LoggerService extends ConsoleLogger {
  error({ message, context, stack }: Params) {
    super.error(message, stack, context);
  }
}
