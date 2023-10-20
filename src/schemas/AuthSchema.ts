import Yup, { object, string } from "yup";

export const executeAuthSchema = object().shape({
  email: string().email().required("email is required!"),
  password: string()
    .min(8, "minimum 8 characters!")
    .required("password is required!"),
});

export const refreshTokenSchema = object().shape({
  token: string().required(),
  refresh_token: string().required(),
});

export type AuthInterface = Yup.InferType<typeof executeAuthSchema>;
export type RefreshTokenInterface = Yup.InferType<typeof refreshTokenSchema>;
