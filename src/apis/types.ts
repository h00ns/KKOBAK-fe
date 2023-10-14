export interface ApiResponse {
  result: any;
  message: string;
  code: number;
}

export interface ApiError extends ApiResponse {
  result: null;
}
