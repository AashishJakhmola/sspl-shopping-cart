import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ProductsActions from './products.actions';
import { Product } from './products.model';

@Injectable()
export class ProductsEffects {
  loadProducts$;

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {
    this.loadProducts$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProductsActions.loadProducts),
        switchMap(() =>
          this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(
            map(products =>
              ProductsActions.loadProductsSuccess({ products })
            ),
            catchError(error =>
              of(
                ProductsActions.loadProductsFailure({
                  error: error.message ?? 'Failed',
                })
              )
            )
          )
        )
      )
    );
  }
}

