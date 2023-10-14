export interface checkEmailPayload {
  email: string;
}

export interface checkEmailResponse {
  isDuplicate: boolean;
}

export interface signUpPayload {
  email: string;
  name: string;
  password: string;
}
