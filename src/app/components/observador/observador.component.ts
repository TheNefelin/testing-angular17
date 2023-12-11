import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { Item } from '../../interfaces/item';

@Component({
  selector: 'app-observador',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './observador.component.html',
  styleUrl: './observador.component.css'
})
export class ObservadorComponent {
  products$ = this.productsService.getProducts$()
  items$ = this.productsService.items$

  constructor(private productsService: ProductsService) {}

  addItem(prod: Product) {
    const newItem = {
      id: prod.id,
      nombre: prod.nombre,
      img_cover: prod.img_cover,
      cantidad: 1,
      precio: 5000,
    }

    this.productsService.addItem(newItem)
  }

  removeItem(prod: Item) {
    this.productsService.removeITem(prod)
  }
}
