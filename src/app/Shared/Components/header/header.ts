import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCartItemCount } from '../../../features/cart/cart/store/cart.selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="header">
      <h2 class="logo">SSPL Store</h2>

      <nav>
        <a routerLink="/">Products</a>
        <a routerLink="/cart">
          Cart <span class="badge">{{ cartCount() }}</span>
        </a>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 20px;
      background: #1976d2;
      color: #fff;
    }

    nav a {
      color: #fff;
      margin-left: 16px;
      text-decoration: none;
      font-weight: 500;
      position: relative;
    }

    .badge {
      background: red;
      color: white;
      border-radius: 50%;
      padding: 2px 8px;
      font-size: 12px;
      margin-left: 6px;
    }
  `]
})
export class HeaderComponent {
  private store = inject(Store);

  cartCount = this.store.selectSignal(selectCartItemCount);
}
