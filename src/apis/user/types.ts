import { ApiResponse } from '../types';

export interface checkEmailPayload {
  email: string;
}

export interface checkEmailResponse extends ApiResponse {
  result: {
    isDuplicate: boolean;
  };
}

export interface signUpPayload {
  email: string;
  name: string;
  password: string;
}
