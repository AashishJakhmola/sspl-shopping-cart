import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { CartItem } from './cart.model';

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,

  // Add to cart
  on(CartActions.addToCart, (state, { product }) => {
    const existingItem = state.items.find(
      item => item.product.id === product.id
    );

    if (existingItem) {
      return {
        ...state,
        items: state.items.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    return {
      ...state,
      items: [...state.items, { product, quantity: 1 }],
    };
  }),

  // Increase quantity
  on(CartActions.increaseQuantity, (state, { productId }) => ({
    ...state,
    items: state.items.map(item =>
      item.product.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ),
  })),

  // Decrease quantity
  on(CartActions.decreaseQuantity, (state, { productId }) => ({
    ...state,
    items: state.items
      .map(item =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0),
  })),

  // Remove item
  on(CartActions.removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter(item => item.product.id !== productId),
  })),

  // Clear cart
  on(CartActions.clearCart, state => ({
    ...state,
    items: [],
  }))
);
