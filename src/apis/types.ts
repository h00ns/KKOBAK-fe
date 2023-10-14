export interface ApiResponse<T> {
  result: T;
  message: string;
  code: number;
}

export interface ApiError {
  result: null;
  message: string;
  code: number;
}
