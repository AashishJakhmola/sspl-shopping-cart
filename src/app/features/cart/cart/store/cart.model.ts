import { Product } from "../../../products/store/products.model";

export interface CartItem {
  product: Product;
  quantity: number;
}