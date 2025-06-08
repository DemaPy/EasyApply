import { ApiResponse } from 'src/types/api';

export const responseObject = <T>({
  data,
  error,
  message,
  statusCode,
}: ApiResponse<T>) => {
  return {
    data: data,
    error: error ?? null,
    message: message ?? null,
    statusCode: statusCode ?? 200,
  };
};
