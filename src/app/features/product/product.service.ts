import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Injectable({ providedIn: 'root' })
export class ProductService extends ApiService {
  getAll() {
    return this.get<any[]>('products');
  }

  getById(id: number) {
    return this.get<any>(`products/${id}`);
  }

  create(data: any) {
    return this.post<any>('products', data);
  }

  update(id: number, data: any) {
    return this.put<any>(`products/${id}`, data);
  }

  remove(id: number) {
    return this.delete<any>(`products/${id}`);
  }
}
