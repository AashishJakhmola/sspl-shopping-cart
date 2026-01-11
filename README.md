# SSPL Shopping Cart Application

A Shopping Cart web application built using **Angular (Standalone Components)** and **NgRx** to demonstrate state management, scalable architecture, and best practices.

---

## 🚀 Tech Stack

- Angular 20
- NgRx (Store, Actions, Reducers, Selectors, Effects)
- RxJS
- Angular Router
- SCSS
- FakeStore API (https://fakestoreapi.com)

---

## 📦 Application Features

### Product Listing
- Fetches products from FakeStore API using **NgRx Effects**
- Displays product image, title, and price
- Add to Cart functionality
- Loader shown during API delay

### Shopping Cart
- Add product to cart
- Increase / Decrease quantity
- Remove item from cart
- Clear cart
- Display total price and item count
- User-friendly empty cart screen

### State Management (NgRx)
- **Products State**
  - Load, Success, Failure
- **Cart State**
  - Add, Remove, Update Quantity, Clear
- Selectors for derived data (cart count, total price)
- Strong typing (no `any` used)

### UX Enhancements
- Sticky header with cart count badge
- Subtle badge animation on cart update
- Responsive product cards with hover effects
- Button disabled briefly to prevent multiple clicks

### Bonus Features
- Cart state persisted in `localStorage`
- Cart count displayed in header

---

## 🗂️ Project Structure

src/app
├── features
│ ├── products
│ │ ├── product-list
│ │ └── store
│ └── cart
│ ├── cart
│ └── store
├── shared
│ └── components
│ └── header
├── app.routes.ts
├── app.config.ts
└── main.ts


---

## 🔄 NgRx Flow (Example: Products)

1. ProductList component dispatches `loadProducts`
2. ProductsEffect calls FakeStore API
3. On success, `loadProductsSuccess` action is dispatched
4. Reducer updates store state
5. UI reacts automatically via selectors and signals

---

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- Angular CLI

### Steps to Run
```bash
npm install
ng serve

http://localhost:4200

API Used

Fetch products: https://fakestoreapi.com/products