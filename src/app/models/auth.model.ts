// src/app/core/models/auth.model.ts
export type LoginRequest = {
  usernameOrEmail: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  expiresIn: number;
  user: {
    id: string;
    username: string;
    email: string;
    role: number;
  };
};

export type RegisterRequest = {
  username: string;
  email: string;
  password: string;
  role: number; // 0 = admin, 1 = customer, 2 = staff
};

export type RegisterResponse = {
  id: string;
  username: string;
  email: string;
  role: number;
};
