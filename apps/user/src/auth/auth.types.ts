import { DeviceTypeEnum } from "@app/shared";

export type LoginResponse = {
  token: string;
  expiresIn: string;
};

export type UserPayload = {
  id: string;
  email: string;
};

export type DeviceDetails = {
  deviceType: DeviceTypeEnum;
  deviceDetail: string;
  deviceToken: string;
};
