import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = environment.apiUrl +"/cart";

  constructor(
    private httpCliente: HttpClient
  ) { }

  addToCart(product:Product): Observable<Product>{
    return this.httpCliente.post<Product>(this.apiUrl, product)
  }

  getCartItems():Observable<Product[]>{
    return this.httpCliente.get<Product[]>(this.apiUrl)
  }

  clearCart(): Observable<void>{
    return this.httpCliente.delete<void>(this.apiUrl)
  }
}
