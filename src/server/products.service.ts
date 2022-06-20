import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from 'src/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  URL = `http://localhost:3000/products`

  constructor(private http: HttpClient) { }

  getProducts(id: any): Observable<IProducts> {
    return this.http.get<IProducts>(`${this.URL}/${id}`)
  }

  getProductsList(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(`${this.URL}`)
  }

  xoaProducts(id: any): Observable<IProducts> {
    return this.http.delete<IProducts>(`${this.URL}/${id}`)
  }

  addProducts(product: IProducts): Observable<IProducts> {
    return this.http.post<IProducts>(`${this.URL}`, product)
  }

  putProducts(product: IProducts): Observable<IProducts> {
    return this.http.put<IProducts>(`${this.URL}/${product.id}`, product)
  }
}
