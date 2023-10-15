export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface GetAccessTokenPayload {
  refreshToken: string;
}

export interface GetAccessTokenResponse {
  accessToken: string;
}

export interface GetKakaoTokenPayload {
  code: string;
}

export interface GetKakaoTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}

export interface GetKakaoUserInfoPayload {
  accessToken: string;
}

export interface VerifyKakaoLoginPayload {
  email: string;
  name: string;
}
