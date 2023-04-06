import { isEmail, isNotEmpty, isString, isStrongPassword } from "class-validator";

type ValidateCredentialsResponse = {
  isEmailValid: boolean;
  isPasswordValid: boolean;
  message: string[];
};

type ValidateCredentialsParams = {
  email: string;
  password: string;
};

export const validateCredentials = ({
  email,
  password,
}: ValidateCredentialsParams): ValidateCredentialsResponse => {
  const isEmailValid = isString(email) && isNotEmpty(email) && isEmail(email);
  const isPasswordValid = isString(password) && isNotEmpty(password) && isStrongPassword(password);
  return {
    isEmailValid,
    isPasswordValid,
    message: [
      isEmailValid ? undefined : "Email is not valid",
      isPasswordValid ? undefined : "Password is not valid",
    ],
  };
};
