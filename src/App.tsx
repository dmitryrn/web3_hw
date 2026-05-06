import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { cartProducts, catalogueProducts } from './mockData'
import CartPage from './pages/Cart/Page'
import CatalogPage from './pages/Catalog/Page'
import CheckoutPage from './pages/Checkout/Page'
import OrderConfirmationPage from './pages/OrderConfirmation/Page'
import ProductPage from './pages/Product/Page'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <main className="page-content">
          <Routes>
            <Route path="/" element={<CatalogPage />} />
            <Route path="/products/:productId" element={<ProductPage products={catalogueProducts} />} />
            <Route path="/cart" element={<CartPage products={cartProducts} />} />
            <Route path="/checkout" element={<CheckoutPage products={cartProducts} />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
