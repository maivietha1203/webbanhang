// src/app/core/models/api-response.model.ts
export type ApiResponse<T> = {
  timestamp: string;
  success: boolean;
  message: string;
  data: T;
};

export type PagedData<T> = {
  items: T[];
  totalItems: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
};
