import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private items = new BehaviorSubject<Item[]>([])
  items$ = this.items.asObservable()

  constructor(private httpClient: HttpClient) { }
  
  getProducts$(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`https://bsite.net/metalflap/gj_juegos`);
  }

  getProductsById$(id: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`https://bsite.net/metalflap/gj_juegos/${id}`);
  }

  addItem(item: Item) {
    this.items.next([...this.items.value, item])
  }

  removeITem(item: Item) {
    this.items.next(this.items.value.filter(e => e !== item))
  }
}
