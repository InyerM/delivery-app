import { CountryCodeAlpha3Enum, PhoneCountryPrefixes } from "@app/shared";
import { Type } from "class-transformer";
import { IsEmail, IsEnum, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class SignUpDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsEnum(CountryCodeAlpha3Enum)
  @IsNotEmpty()
  phoneCountryCode: CountryCodeAlpha3Enum;

  @IsEnum(PhoneCountryPrefixes)
  @Type(() => String)
  @IsNotEmpty()
  phoneCountryPrefix: PhoneCountryPrefixes;

  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  phoneNumber: string;
}
