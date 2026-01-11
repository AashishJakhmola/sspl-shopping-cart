import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { productsReducer } from './features/products/store/products.reducer';
import { provideHttpClient } from '@angular/common/http';
import { ProductsEffects } from './features/products/store/products.effects';
import { cartReducer } from './features/cart/cart/store/cart.reducer';
import { cartMetaReducer, getInitialCartState } from './features/cart/cart/store/cart.meta-reducer';



import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),

    provideStore({
      products: productsReducer,
      cart: cartMetaReducer(cartReducer),
    }),

    provideEffects([ProductsEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),
  ],

};
