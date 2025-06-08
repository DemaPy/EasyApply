export interface ApiResponse<T> {
  data: T;
  message?: string | null;
  error?: string | null;
  statusCode?: number;
}
