import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const JWT_EXPIRES_IN: string = configService.get<string>("JWT_EXPIRES_IN");
export const JWT_SECRET: string = configService.get<string>("JWT_SECRET");
