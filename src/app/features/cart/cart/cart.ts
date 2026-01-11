import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectCartItems,
  selectCartItemCount,
  selectCartTotalPrice,
} from './store/cart.selectors';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from './store/cart.actions';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  private store = inject(Store);

  items = this.store.selectSignal(selectCartItems);
  count = this.store.selectSignal(selectCartItemCount);
  total = this.store.selectSignal(selectCartTotalPrice);

  inc(id: number) {
    this.store.dispatch(increaseQuantity({ productId: id }));
  }
  dec(id: number) {
    this.store.dispatch(decreaseQuantity({ productId: id }));
  }
  remove(id: number) {
    this.store.dispatch(removeFromCart({ productId: id }));
  }
  clear() {
    this.store.dispatch(clearCart());
  }
}
