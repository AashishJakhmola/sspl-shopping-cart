import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadProducts } from '../store/products.actions';
import { selectAllProducts, selectProductsLoading } from '../store/products.selectors';
import { addToCart } from '../../cart/cart/store/cart.actions';
import { signal } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  private store = inject(Store);

  products = this.store.selectSignal(selectAllProducts);
  loading = this.store.selectSignal(selectProductsLoading);
  adding = signal<number | null>(null);

  constructor() {
    this.store.dispatch(loadProducts());
  }

  addToCart(product: any) {
    this.adding.set(product.id);
    this.store.dispatch(addToCart({ product }));

    setTimeout(() => {
      this.adding.set(null);
    }, 300);
  }


}
