import { ActionReducer } from '@ngrx/store';
import { CartState } from './cart.reducer';

const CART_KEY = 'sspl_cart';

export function cartMetaReducer(
  reducer: ActionReducer<CartState>
): ActionReducer<CartState> {
  return (state, action) => {
    const nextState = reducer(state, action);

    localStorage.setItem(CART_KEY, JSON.stringify(nextState));

    return nextState;
  };
}

export function getInitialCartState(): CartState | undefined {
  const saved = localStorage.getItem(CART_KEY);
  return saved ? JSON.parse(saved) : undefined;
}
