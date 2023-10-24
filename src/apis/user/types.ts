export interface CheckEmailPayload {
  email: string;
}

export interface CheckEmailResponse {
  isDuplicate: boolean;
}

export interface SignUpPayload {
  email: string;
  name: string;
  password: string;
}

export interface SendResetCodePayload {
  email: string;
}

export interface PatchPasswordPayload {
  email: string;
  password: string;
  resetCode: string;
}

export interface GetUserInfoResponse {
  id: number;
  email: string;
  name: string;
  salaryDay: number | null;
  createAt: string;
}
